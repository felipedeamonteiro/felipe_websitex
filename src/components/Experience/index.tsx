import React, { useCallback, useState } from 'react';

import { Container } from './styles';
import LetrusImg from '@/public/letrus.png';
import AprendizImg from '@/public/AprendizDigital.png';
import FormulaImg from '@/public/FormulaSAE.png';
import LdemImg from '@/public/LDEM.jpg';
import MeuColegioImg from '@/public/MeuColegio.png';
import NubankImg from '@/public/Nubank.jpg';
import SiemensImg from '@/public/Siemens.jpg';
import ObjectEdgeLogo from '@/public/object-edge-squarelogo.png';
import { useDeviceScreenSize } from '../../hooks/useDeviceScreenSize';
import Image from 'next/image';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [viewCircleBorder1, setViewCircleBorder1] = useState<boolean>(false);
  const [viewText1, setViewText1] = useState<boolean>(false);
  const [viewCircleBorder2, setViewCircleBorder2] = useState<boolean>(false);
  const [viewText2, setViewText2] = useState<boolean>(false);
  const [viewCircleBorder3, setViewCircleBorder3] = useState<boolean>(false);
  const [viewText3, setViewText3] = useState<boolean>(false);
  const [viewCircleBorder4, setViewCircleBorder4] = useState<boolean>(false);
  const [viewText4, setViewText4] = useState<boolean>(false);
  const [viewCircleBorder5, setViewCircleBorder5] = useState<boolean>(false);
  const [viewText5, setViewText5] = useState<boolean>(false);
  const [viewCircleBorder6, setViewCircleBorder6] = useState<boolean>(false);
  const [viewText6, setViewText6] = useState<boolean>(false);
  const [viewCircleBorder7, setViewCircleBorder7] = useState<boolean>(false);
  const [viewText7, setViewText7] = useState<boolean>(false);
  const [viewCircleBorder8, setViewCircleBorder8] = useState<boolean>(false);
  const [viewText8, setViewText8] = useState<boolean>(false);
  const [viewCircleBorder9, setViewCircleBorder9] = useState<boolean>(false);
  const [viewText9, setViewText9] = useState<boolean>(false);

  const { isMobile, isTablet } = useDeviceScreenSize();

  const changeBorderLines = useCallback(() => {
    if (isMobile) {
      if (window.scrollY >= 769) {
        setViewCircleBorder1(true);
        setViewText1(true);
      } else {
        setViewCircleBorder1(false);
        setViewText1(false);
      }
      if (window.scrollY >= 987) {
        setViewCircleBorder2(true);
        setViewText2(true);
      } else {
        setViewCircleBorder2(false);
        setViewText2(false);
      }
      if (window.scrollY >= 1511) {
        setViewCircleBorder3(true);
        setViewText3(true);
      } else {
        setViewCircleBorder3(false);
        setViewText3(false);
      }
      if (window.scrollY >= 1976) {
        setViewCircleBorder4(true);
        setViewText4(true);
      } else {
        setViewCircleBorder4(false);
        setViewText4(false);
      }
      if (window.scrollY >= 2541) {
        setViewCircleBorder5(true);
        setViewText5(true);
      } else {
        setViewCircleBorder5(false);
        setViewText5(false);
      }
      if (window.scrollY >= 3012) {
        setViewCircleBorder6(true);
        setViewText6(true);
      } else {
        setViewCircleBorder6(false);
        setViewText6(false);
      }
      if (window.scrollY >= 3377) {
        setViewCircleBorder7(true);
        setViewText7(true);
      } else {
        setViewCircleBorder7(false);
        setViewText7(false);
      }
      if (window.scrollY >= 3948) {
        setViewCircleBorder8(true);
        setViewText8(true);
      } else {
        setViewCircleBorder8(false);
        setViewText8(false);
      }
      if (window.scrollY >= 4450) {
        setViewCircleBorder9(true);
        setViewText9(true);
      } else {
        setViewCircleBorder9(false);
        setViewText9(false);
      }
    } else if (isTablet) {
      if (window.scrollY >= 669) {
        setViewCircleBorder1(true);
        setViewText1(true);
      } else {
        setViewCircleBorder1(false);
        setViewText1(false);
      }
      if (window.scrollY >= 787) {
        setViewCircleBorder2(true);
        setViewText2(true);
      } else {
        setViewCircleBorder2(false);
        setViewText2(false);
      }
      if (window.scrollY >= 1011) {
        setViewCircleBorder3(true);
        setViewText3(true);
      } else {
        setViewCircleBorder3(false);
        setViewText3(false);
      }
      if (window.scrollY >= 1376) {
        setViewCircleBorder4(true);
        setViewText4(true);
      } else {
        setViewCircleBorder4(false);
        setViewText4(false);
      }
      if (window.scrollY >= 1641) {
        setViewCircleBorder5(true);
        setViewText5(true);
      } else {
        setViewCircleBorder5(false);
        setViewText5(false);
      }
      if (window.scrollY >= 1912) {
        setViewCircleBorder6(true);
        setViewText6(true);
      } else {
        setViewCircleBorder6(false);
        setViewText6(false);
      }
      if (window.scrollY >= 2277) {
        setViewCircleBorder7(true);
        setViewText7(true);
      } else {
        setViewCircleBorder7(false);
        setViewText7(false);
      }
      if (window.scrollY >= 2548) {
        setViewCircleBorder8(true);
        setViewText8(true);
      } else {
        setViewCircleBorder8(false);
        setViewText8(false);
      }
      if (window.scrollY >= 2850) {
        setViewCircleBorder9(true);
        setViewText9(true);
      } else {
        setViewCircleBorder9(false);
        setViewText9(false);
      }
    } else {
      if (window.scrollY >= 669) {
        setViewCircleBorder1(true);
        setViewText1(true);
      } else {
        setViewCircleBorder1(false);
        setViewText1(false);
      }
      if (window.scrollY >= 987) {
        setViewCircleBorder2(true);
        setViewText2(true);
      } else {
        setViewCircleBorder2(false);
        setViewText2(false);
      }
      if (window.scrollY >= 1411) {
        setViewCircleBorder3(true);
        setViewText3(true);
      } else {
        setViewCircleBorder3(false);
        setViewText3(false);
      }
      if (window.scrollY >= 1676) {
        setViewCircleBorder4(true);
        setViewText4(true);
      } else {
        setViewCircleBorder4(false);
        setViewText4(false);
      }
      if (window.scrollY >= 1941) {
        setViewCircleBorder5(true);
        setViewText5(true);
      } else {
        setViewCircleBorder5(false);
        setViewText5(false);
      }
      if (window.scrollY >= 2312) {
        setViewCircleBorder6(true);
        setViewText6(true);
      } else {
        setViewCircleBorder6(false);
        setViewText6(false);
      }
      if (window.scrollY >= 2577) {
        setViewCircleBorder7(true);
        setViewText7(true);
      } else {
        setViewCircleBorder7(false);
        setViewText7(false);
      }
      if (window.scrollY >= 2848) {
        setViewCircleBorder8(true);
        setViewText8(true);
      } else {
        setViewCircleBorder8(false);
        setViewText8(false);
      }
      if (window.scrollY >= 3150) {
        setViewCircleBorder9(true);
        setViewText9(true);
      } else {
        setViewCircleBorder9(false);
        setViewText9(false);
      }
    }
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBorderLines);
  }

  return (
    <Container id='section-experiencia' darkMode={darkMode}>
      <div className='container'>
        <div className='text-center-row'>
          <h2 className='text-uppercase'>Experiência Profissional</h2>
          <h3 className='text-muted'>Etapas da carreira profissional</h3>
        </div>
        <div className='row'>
          <ul className='timeline'>
            <li>
              <div
                className={
                  viewCircleBorder1
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={FormulaImg} alt='Fórmula SAE Unicamp' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText1
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>1 - DE 2009 A 2010</h4>
                  <h4 className='subheading'>FÓRMULA SAE UNICAMP</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText1 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    FIZ PARTE DA DIVISÃO DE FREIOS, ONDE PROJETAMOS TODO O
                    SISTEMA DE FREIOS DO CARRO F-2009. NOS CLASSIFICAMOS EM 5º
                    LUGAR.
                  </p>
                </div>
              </div>
            </li>

            <li className='timeline-inverted'>
              <div
                className={
                  viewCircleBorder2
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={LdemImg} alt='LDEM logo' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText2
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>2 - DE 2011 A 2013</h4>
                  <h4 className='subheading'>
                    INICIAÇÃO CIENTÍFICA NO ANTIGO LDEM UNICAMP
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText2 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    INICIÇÃO CIENTÍFICA NA ÁREA DE VIBRAÇÕES MECÂNICAS COM BOLSA
                    DO CNPQ. ESTUDEI FENÔMENOS VIBRATÓRIOS EM ENGRENAGENS
                    PLANETÁRIAS DE TRANSMISSÕES AUTOMÁTICAS.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div
                className={
                  viewCircleBorder3
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={MeuColegioImg} alt='Meu colegio logo' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText3
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>3 - 2º SEMESTRE DE 2013</h4>
                  <h4 className='subheading'>MEU COLÉGIO</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText3 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    TRABALHEI COMO PROFESSOR DO COLÉGIO TÉCNICO NOTURNO.
                  </p>
                </div>
              </div>
            </li>

            <li className='timeline-inverted'>
              <div
                className={
                  viewCircleBorder4
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={SiemensImg} alt='Siemens' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText4
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>4 - DE JUNHO A DEZEMBRO DE 2014</h4>
                  <h4 className='subheading'>SIEMENS INDUSTRY SOFTWARE</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText4 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    ESTÁGIO NA PARTE DE SOFTWARES LMS (ATUAL SIMCENTER) QUE
                    ATUAM NA SIMULAÇÃO E TESTES DE PROJETOS.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div
                className={
                  viewCircleBorder5
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={SiemensImg} alt='Siemens' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText5
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>5 - DE JANEIRO DE 2015 A MARÇO DE 2016</h4>
                  <h4 className='subheading'>SIEMENS INDUSTRY SOFTWARE</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText5 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    TRABALHEI COM PRÉ E PÓS VENDA TÉCNICA DO SOFTWARE PREACTOR,
                    QUE CUIDA DA PROGRAMAÇÃO E PLANEJAMENTO DO PROCESSO DE
                    PRODUÇÃO DE INDÚSTRIAS.
                  </p>
                </div>
              </div>
            </li>

            <li className='timeline-inverted'>
              <div
                className={
                  viewCircleBorder6
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={NubankImg} alt='Nubank' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText6
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>6 - DE MARÇO A JUNHO DE 2017</h4>
                  <h4 className='subheading'>NUBANK</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText6 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    ATUEI COMO ANALISTA DE RELACIONAMENTO AO CLIENTE NOS SETORES
                    DE BILLS E CHARGEBACK.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div
                className={
                  viewCircleBorder7
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={AprendizImg} alt='Aprendiz Digital' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText7
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>7 - DE JUNHO DE 2016 ATÉ OUTUBRO DE 2019</h4>
                  <h4 className='subheading'>APRENDIZ DIGITAL</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText7 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    FUI FUNDADOR DESTA STARTUP DA ÁREA DA EDUCAÇÃO. ELA OFERECIA
                    SERVIÇOS DE AULAS PARTICULARES DE EXATAS E PROGRAMAÇÃO.
                  </p>
                </div>
              </div>
            </li>

            <li className='timeline-inverted'>
              <div
                className={
                  viewCircleBorder8
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image alt='Letrus' src={LetrusImg} />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText8
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>8 - DE JANEIRO A SETEMBRO DE 2020</h4>
                  <h4 className='subheading'>LETRUS</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText8 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    ATUEI COMO DESENVOLVEDOR FRONTEND NOS DIVERSOS PROJETOS DA
                    EMPRESA. ATUEI COM DESIGN SYSTEM, INTEGRAÇÃO COM HUBSPOT,
                    RESOLUÇÃO DE BUGS, MANUTENÇÃO/ATUALIZAÇÃO DO CÓDIGO E
                    PARTICIPAÇÃO NA CRIAÇÃO DE UM BACKOFFICE.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div
                className={
                  viewCircleBorder9
                    ? 'timeline-image circleActive'
                    : 'timeline-image'
                }
              >
                <Image src={ObjectEdgeLogo} alt='Object Edge' />
              </div>
              <div className='timeline-panel'>
                <div
                  className={
                    viewText9
                      ? 'timeline-heading activeText'
                      : 'timeline-heading'
                  }
                >
                  <h4>9 - DE FEVEREIRO DE 2021 ATÉ AGORA</h4>
                  <h4 className='subheading'>OBJECT EDGE</h4>
                </div>
                <div className='timeline-body'>
                  <p
                    className={
                      viewText9 ? 'text-muted activeText' : 'text-muted'
                    }
                  >
                    DESENVOLVEDOR FRONTEND REACT. ATUO EM PROJETOS
                    INTERNACIONAIS, LIDANDO COM CLIENTES E COLEGAS DE TRABALHO
                    ESPALHADOS PELO MUNDO. DESENVOLVENDO E FAZENDO MANUTENÇÃO
                    PRINCIPALMENTE DE PLATAFORMAS DE E-COMMERCE.
                  </p>
                </div>
              </div>
            </li>

            {/* <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>READY FOR
                    <br/>NEW
                    <br/>CHALLENGES!</h4>
                  </div>
                </li> */}
          </ul>
        </div>
      </div>
      <div className='animation-div' />
    </Container>
  );
};

export default Experience;
