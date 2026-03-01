import { OpenSourceProject } from "@/types/cv";
import Section from "./Section";

export default function OpenSource({
  projects,
}: {
  projects: OpenSourceProject[];
}) {
  return (
    <Section title="Open Source">
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.name} className="list-item-hover flex items-start gap-2">
            <span className="text-lg shrink-0">🚀</span>
            <div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-link font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {p.name}
              </a>
              <span className="text-gray-600 dark:text-gray-400">
                {" "}&mdash; {p.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
