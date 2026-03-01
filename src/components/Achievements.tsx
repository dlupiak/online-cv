import { Achievement } from "@/types/cv";
import Section from "./Section";

const MEDALS = ["🏆", "🥈"];

export default function Achievements({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <Section title="Achievements">
      <ul className="space-y-2">
        {achievements.map((a, i) => (
          <li
            key={a.event}
            className="text-gray-700 dark:text-gray-300 list-item-hover flex items-start gap-2"
          >
            <span className="shrink-0">{MEDALS[i] || "🏅"}</span>
            <div>
              <span className="font-medium">{a.title}</span>
              <span className="text-gray-500 dark:text-gray-400">
                {" "}({a.event})
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
