export default function Summary({ text }: { text: string }) {
  return (
    <section className="mb-10">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {text}
      </p>
    </section>
  );
}
