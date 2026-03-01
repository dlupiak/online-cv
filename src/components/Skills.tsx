import { SkillCategory } from "@/types/cv";
import Section from "./Section";

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <Section title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((cat) => (
          <div
            key={cat.category}
            className="glow-border rounded-xl p-4 bg-white/30 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 font-mono">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`pill-hover rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 cursor-default stagger-${Math.min(i + 1, 8)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
