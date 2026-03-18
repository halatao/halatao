import Link from "next/link";

import type { ContentPage } from "@/content/types";
import { getBreadcrumbItems } from "@/lib/routing";

export function Breadcrumbs({ page }: { page: ContentPage }) {
  const items = getBreadcrumbItems(page);

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${index}`}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
