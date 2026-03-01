import { Experience as ExperienceType } from "@/types/cv";
import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

export default function Experience({
  experience,
}: {
  experience: ExperienceType[];
}) {
  return (
    <Section title="Career History">
      <div className="relative ml-1.5">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-1 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-300 dark:to-indigo-700" />
        {experience.map((exp, i) => (
          <ExperienceCard key={exp.project} exp={exp} isFirst={i === 0} />
        ))}
      </div>
    </Section>
  );
}
