import redirectArtifact from "../generated/redirects.json";

type WorkerRedirectRule = {
  target: string;
  status: 301 | 308;
  query: "preserve" | "drop";
};

type WorkerRedirectArtifact = {
  canonicalOrigin: string;
  rules: Record<string, WorkerRedirectRule>;
};

const artifact = redirectArtifact as WorkerRedirectArtifact;
const canonicalOrigin = new URL(artifact.canonicalOrigin);
const productionHosts = new Set(["halatao.cz", "www.halatao.cz"]);

export interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

export interface Env {
  ASSETS: Fetcher;
}

export type AssetFetch = (request: Request) => Promise<Response>;

function redirectLocation(requestUrl: URL, rule?: WorkerRedirectRule) {
  const redirectBase = productionHosts.has(requestUrl.hostname)
    ? canonicalOrigin
    : new URL(requestUrl.origin);
  const target = new URL(rule?.target ?? requestUrl.pathname, redirectBase);
  target.search = rule?.query === "drop" ? "" : requestUrl.search;
  return target.toString();
}

export async function handleRequest(
  request: Request,
  assetFetch: AssetFetch,
) {
  const url = new URL(request.url);
  const rule = artifact.rules[url.pathname];

  const needsOriginNormalization =
    productionHosts.has(url.hostname) &&
    (url.protocol !== canonicalOrigin.protocol || url.hostname !== canonicalOrigin.hostname);

  if (needsOriginNormalization) {
    return Response.redirect(redirectLocation(url, rule), 308);
  }

  if (rule) {
    return Response.redirect(redirectLocation(url, rule), rule.status);
  }

  return assetFetch(request);
}

const worker = {
  fetch(request: Request, env: Env) {
    return handleRequest(request, (assetRequest) => env.ASSETS.fetch(assetRequest));
  },
};

export default worker;
