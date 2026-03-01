import { Education as EducationType } from "@/types/cv";
import Section from "./Section";

export default function Education({
  education,
}: {
  education: EducationType[];
}) {
  return (
    <Section title="Education">
      <ul className="space-y-2">
        {education.map((e) => (
          <li key={e.degree} className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">{e.degree}</span> &mdash; {e.field}
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {e.institution}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
