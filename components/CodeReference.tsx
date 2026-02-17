interface CodeReferenceProps {
  /** Code or statute name, e.g. "Florida Building Code 8th Edition (2023)" */
  code: string;
  /** Specific section, e.g. "Section 1609 — Wind Loads" */
  section?: string;
  /** Plain-language description of what the code requires */
  description: string;
  /** External link to the official statute or code source */
  link?: string;
  /** Link display text (default: "View Source") */
  linkText?: string;
}

export function CodeReference({
  code,
  section,
  description,
  link,
  linkText = "View Source",
}: CodeReferenceProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg">
      <p className="font-bold text-blue-900 text-sm mb-1">{code}</p>
      {section && (
        <p className="text-blue-800 text-sm font-medium mb-2">{section}</p>
      )}
      <p className="text-blue-800 text-sm">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm mt-2 inline-block"
        >
          {linkText} &rarr;
        </a>
      )}
    </div>
  );
}
