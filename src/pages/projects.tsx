import Head from 'next/head';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-(--section-background) px-6 text-center text-(--text)">
      <Head>
        <title>Projetos | Felipe Monteiro</title>
      </Head>
      <h1 className="font-display text-3xl font-bold">Projetos</h1>
      <p className="mt-4 max-w-lg text-(--muted)">
        Os projetos disponíveis estão apresentados na página principal do
        portfólio.
      </p>
      <Link
        href="/#projects"
        className="mt-8 rounded-md bg-(--accent) px-6 py-3 font-bold text-white transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
      >
        Ver projetos
      </Link>
    </main>
  );
}
