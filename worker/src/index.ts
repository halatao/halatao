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
const supportedHosts = new Set(["halatao.cz", "www.halatao.cz"]);

export type OriginFetch = (request: Request) => Promise<Response>;

function redirectLocation(requestUrl: URL, rule?: WorkerRedirectRule) {
  const target = new URL(rule?.target ?? requestUrl.pathname, canonicalOrigin);
  target.search = rule?.query === "drop" ? "" : requestUrl.search;
  return target.toString();
}

export async function handleRequest(
  request: Request,
  originFetch: OriginFetch = (originRequest) => fetch(originRequest),
) {
  const url = new URL(request.url);
  const rule = artifact.rules[url.pathname];

  if (rule) {
    return Response.redirect(redirectLocation(url, rule), rule.status);
  }

  const needsOriginNormalization =
    supportedHosts.has(url.hostname) &&
    (url.protocol !== canonicalOrigin.protocol || url.hostname !== canonicalOrigin.hostname);

  if (needsOriginNormalization) {
    return Response.redirect(redirectLocation(url), 308);
  }

  return originFetch(request);
}

const worker = {
  fetch(request: Request) {
    return handleRequest(request);
  },
};

export default worker;
