export default function Footer() {
  return (
    <footer className="flex min-h-16 w-full items-center justify-center bg-[var(--footer-background)] px-6 py-4 text-center text-sm text-[var(--text)] sm:text-base">
      Copyright &copy; Felipe de Alcântara Monteiro - {new Date().getFullYear()}
    </footer>
  );
}
