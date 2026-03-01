import { Profile } from "@/types/cv";

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="mb-10 text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white animate-fade-in-up">
        <span className="gradient-text">{profile.name}</span>
      </h1>
      <p className="text-lg text-indigo-600 dark:text-indigo-400 mt-1 animate-fade-in-up animate-delay-1">
        {profile.title}
      </p>
      <div className="mt-3 flex flex-wrap gap-4 justify-center sm:justify-start text-sm animate-fade-in-up animate-delay-2">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          GitHub
        </a>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
}
