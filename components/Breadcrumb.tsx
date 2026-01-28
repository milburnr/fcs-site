import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./Schema";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`bg-gray-100 py-3 ${className}`}
      >
        <div className="container-custom">
          <ol className="flex items-center flex-wrap gap-2 text-sm">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="text-brand-green-dark hover:text-brand-green-forest transition-colors flex items-center"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ) : index === allItems.length - 1 ? (
                  <span className="text-gray-700 font-medium">{item.name}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-brand-green-dark hover:text-brand-green-forest transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      <BreadcrumbSchema items={allItems} />
    </>
  );
}
