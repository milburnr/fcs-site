import { BUSINESS_INFO } from "@/lib/constants";

interface AuthorBylineProps {
  publishDate?: string;
  modifiedDate?: string;
  variant?: "light" | "dark";
}

export function AuthorByline({
  publishDate,
  modifiedDate,
  variant = "dark",
}: AuthorBylineProps) {
  const textColor = variant === "light" ? "text-gray-300" : "text-gray-500";
  const separatorColor =
    variant === "light" ? "text-gray-500" : "text-gray-300";

  return (
    <div className={`flex items-center gap-2 text-sm ${textColor} mt-2 mb-6`}>
      <span>By {BUSINESS_INFO.name}</span>
      {publishDate && (
        <>
          <span className={separatorColor}>|</span>
          <time dateTime={publishDate}>
            {new Date(publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </>
      )}
      {modifiedDate && modifiedDate !== publishDate && (
        <>
          <span className={separatorColor}>|</span>
          <span>
            Updated{" "}
            {new Date(modifiedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </>
      )}
    </div>
  );
}
