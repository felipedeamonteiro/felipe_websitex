import React from 'react';

import { Container } from './styles';
import Card3D from '../Card3D';
import CaosImg from '@/public/caos_focado_test.png';
import CredereImg from '@/public/credere_test.png';
import VenturusImg from '@/public/venturus_test.png';
import CodeMinerImg from '@/public/code_miner.png';
import ContaSimplesImg from '@/public/conta_simples.jpeg';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <Container id='section-projetos' darkMode={darkMode}>
      <div className='text-center-row'>
        <h1>Projetos</h1>
        <h3>Projetos de testes de processos seletivos de empresas</h3>
      </div>

      <div className='cards-wrapper'>
        <Card3D
          imgSrc={CaosImg}
          imgAlt='Imagem do Teste Caos Focado'
          projectHref='https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/'
          backCardTitle='Teste para Dev Frontend - Caos Focado'
          backCardDescritption='O projeto se baseia em contruir uma listagem de clínicas, previamente dadas e também de um formulário para adicionar mais clínicas. Tinha a tarefa de seguir o layout dado, trabalhar com a Api dos correios e ordenação.'
        />
        <Card3D
          imgSrc={CredereImg}
          imgAlt='Imagem do Teste da Credere'
          projectHref='https://credere-frontend-test.vercel.app/'
          backCardTitle='Teste para Dev Backend - Credere'
          backCardDescritption="O Projeto é FullStack, possui um backend hospedado na Digital Ocean e o Front na Vercel, onde temos uma 'sonda' que pode se locomover num plano 2D."
        />
        <Card3D
          imgSrc={VenturusImg}
          imgAlt='Imagem do teste da Venturus'
          projectHref='https://venturus-frontend-test-2020.vercel.app/'
          backCardTitle='Teste para Dev Frontend - Venturus'
          backCardDescritption='Neste projeto toda aplicação está somente no frontend. A ideia era criar uma dashboard nos moldes do CartolaFC onde se criava times personalizados de futebol usando uma API externa. O layout é bem complexo e é um dos trabalhos mais desafiadores que eu fiz.'
        />
        <Card3D
          imgSrc={CodeMinerImg}
          imgAlt='Imagem do Teste Caos Focado'
          aTagStyle={true}
          backCardTitle='Teste para Dev FullStack - Code Miner'
          backCardDescritption='Ainda em construção...'
        />
        <Card3D
          imgSrc={ContaSimplesImg}
          imgAlt='Imagem do Teste da Credere'
          projectHref='https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/'
          backCardTitle='Teste para Dev FullStack - Conta Simples'
          backCardDescritption='Backend pronto, mas ainda falta o front. Em construção...'
        />
      </div>
      <div className='animation-div' />
    </Container>
  );
};

export default Projects;
