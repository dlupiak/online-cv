import { Experience as ExperienceType } from "@/types/cv";

export default function ExperienceCard({
  exp,
  isFirst = false,
}: {
  exp: ExperienceType;
  isFirst?: boolean;
}) {
  return (
    <div className="relative pl-7 mb-8">
      <div
        className={`timeline-dot absolute left-[-5px] top-1.5 ${isFirst ? "timeline-dot-pulse" : ""}`}
      />
      <div className="card-hover p-4 -m-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {exp.project}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
            {exp.duration}
          </span>
        </div>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
          {exp.position} &middot; {exp.company}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {exp.details}
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
          {exp.contributions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="pill-hover rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-400 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
