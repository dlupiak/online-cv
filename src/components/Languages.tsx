import { Language } from "@/types/cv";
import Section from "./Section";

export default function Languages({ languages }: { languages: Language[] }) {
  return (
    <Section title="Languages">
      <ul className="flex flex-wrap gap-6">
        {languages.map((l) => (
          <li key={l.language} className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">{l.language}</span>
            <span className="text-gray-500 dark:text-gray-400">
              {" "}
              &middot; {l.proficiency}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
