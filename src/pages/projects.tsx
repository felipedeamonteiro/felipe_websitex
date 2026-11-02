import Head from 'next/head';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--section-background)] px-6 text-center text-[var(--text)]">
      <Head>
        <title>Projetos | Felipe Monteiro</title>
      </Head>
      <h1 className="font-display text-3xl font-bold">Projetos</h1>
      <p className="mt-4 max-w-lg text-[var(--muted)]">
        Os projetos disponíveis estão apresentados na página principal do
        portfólio.
      </p>
      <Link
        href="/#section-projetos"
        className="mt-8 rounded-md bg-[var(--accent)] px-6 py-3 font-bold text-white transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
      >
        Ver projetos
      </Link>
    </main>
  );
}
