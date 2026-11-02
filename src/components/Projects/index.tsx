import CaosImg from '@public/caos_focado_test.png';
import CodeMinerImg from '@public/code_miner.png';
import ContaSimplesImg from '@public/conta_simples.jpeg';
import CredereImg from '@public/credere_test.png';
import VenturusImg from '@public/venturus_test.png';
import Card3D from '../Card3D';

const projects = [
  {
    imgSrc: CaosImg,
    imgAlt: 'Imagem do teste Caos Focado',
    projectHref:
      'https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/',
    backCardTitle: 'Teste para Dev Frontend - Caos Focado',
    backCardDescription:
      'O projeto se baseia em construir uma listagem de clínicas previamente fornecidas e um formulário para adicionar novas clínicas. A tarefa incluía seguir o layout, integrar a API dos Correios e implementar ordenação.',
  },
  {
    imgSrc: CredereImg,
    imgAlt: 'Imagem do teste da Credere',
    projectHref: 'https://credere-frontend-test.vercel.app/',
    backCardTitle: 'Teste para Dev Backend - Credere',
    backCardDescription:
      'Projeto full-stack com backend hospedado na Digital Ocean e frontend na Vercel. A aplicação controla uma sonda que se locomove em um plano 2D.',
  },
  {
    imgSrc: VenturusImg,
    imgAlt: 'Imagem do teste da Venturus',
    projectHref: 'https://venturus-frontend-test-2020.vercel.app/',
    backCardTitle: 'Teste para Dev Frontend - Venturus',
    backCardDescription:
      'Dashboard inspirada no Cartola FC para criar times personalizados de futebol usando uma API externa. O layout complexo tornou este um dos trabalhos mais desafiadores que desenvolvi.',
  },
  {
    imgSrc: CodeMinerImg,
    imgAlt: 'Imagem do teste Code Miner',
    backCardTitle: 'Teste para Dev Full-Stack - Code Miner',
    backCardDescription: 'Ainda em construção.',
  },
  {
    imgSrc: ContaSimplesImg,
    imgAlt: 'Imagem do teste Conta Simples',
    projectHref:
      'https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/',
    backCardTitle: 'Teste para Dev Full-Stack - Conta Simples',
    backCardDescription: 'Backend pronto, com o frontend ainda em construção.',
  },
];

export default function Projects() {
  return (
    <section
      id="section-projetos"
      className="bg-[var(--section-alternate)] px-5 py-24 text-[var(--text)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Projetos
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--muted)] italic">
            Projetos de testes de processos seletivos de empresas
          </p>
        </header>
        <div className="mt-14 grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card3D key={project.backCardTitle} {...project} />
          ))}
        </div>
        <div className="mt-16 h-1 w-full bg-slate-300 dark:bg-cyan-300 dark:shadow-[0_0_16px_#8140f7]" />
      </div>
    </section>
  );
}
