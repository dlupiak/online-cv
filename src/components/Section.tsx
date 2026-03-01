interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 group">
        <span className="section-bracket">&lt;</span>
        {title}
        <span className="section-bracket"> /&gt;</span>
      </h2>
      {children}
    </section>
  );
}
