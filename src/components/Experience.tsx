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
      {experience.map((exp) => (
        <ExperienceCard key={exp.project} exp={exp} />
      ))}
    </Section>
  );
}
