export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-400 dark:text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Dmytro Lupyak
      </p>
      <p className="mt-1 text-xs">
        Built with Next.js &middot; Crafted with <span className="text-red-400">♥</span> and way too much ☕
      </p>
    </footer>
  );
}
