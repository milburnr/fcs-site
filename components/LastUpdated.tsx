interface LastUpdatedProps {
  date: string; // ISO date string like "2024-01-15" or "January 2024"
  className?: string;
  showIcon?: boolean;
}

export function LastUpdated({
  date,
  className = "",
  showIcon = true,
}: LastUpdatedProps) {
  // Format the date for display
  const formatDate = (dateStr: string): string => {
    // If already formatted like "January 2024", return as-is
    if (dateStr.match(/^[A-Z][a-z]+ \d{4}$/)) {
      return dateStr;
    }

    // Otherwise parse and format
    try {
      const parsed = new Date(dateStr);
      return parsed.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div
      className={`inline-flex items-center text-sm text-gray-500 ${className}`}
    >
      {showIcon && (
        <svg
          className="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <span>Last updated: {formatDate(date)}</span>
    </div>
  );
}

// Variant that includes "Published" date as well
interface ArticleDatesProps {
  published?: string;
  updated: string;
  className?: string;
}

export function ArticleDates({
  published,
  updated,
  className = "",
}: ArticleDatesProps) {
  const formatDate = (dateStr: string): string => {
    if (dateStr.match(/^[A-Z][a-z]+ \d{4}$/)) {
      return dateStr;
    }
    try {
      const parsed = new Date(dateStr);
      return parsed.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className={`flex flex-wrap gap-4 text-sm text-gray-500 ${className}`}>
      {published && (
        <span className="inline-flex items-center">
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Published: {formatDate(published)}
        </span>
      )}
      <span className="inline-flex items-center">
        <svg
          className="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Updated: {formatDate(updated)}
      </span>
    </div>
  );
}
