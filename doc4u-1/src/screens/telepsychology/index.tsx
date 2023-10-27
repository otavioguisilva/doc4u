import { useState, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { FaCheck, FaPlus } from 'react-icons/fa'

import './styles.css'

import Promocao from '../../assets/promocao.png';
import WomanCourse from '../../assets/mulher fazendo curso.png';
import Whatsapp from '../../assets/logo-whatsapp.svg';
import LogoHeader from '../../assets/logo-header.png';
import Camada2 from '../../assets/Camada2.svg';
import MockupTelepsicologia from '../../assets/mockup-telepsychology.png';

import Footer from '../../components/footer';
import AccordionItem from '../../components/accordion';
import HeaderResponsive from '../../components/header-responsive';
import ScheduleTelepsychology from '../../components/schedule-telepsychology';

import { Link } from 'react-router-dom';


//props do link do header responsive
const linkPath = "/";

export default function Telepsychology() {

    const items = [
        'Cabe no seu bolso',
        'Até 4 consultas/mês',
        'Com agendamento',
        'Sem carência',
        'Sem filas',
        'Sem trânsito',
        'De onde você estiver',
    ];

    const [visibleItems, setVisibleItems] = useState([]);

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (items.length > visibleItems.length) {
                setVisibleItems([...visibleItems, items[visibleItems.length]]);
            } else {
                clearInterval(interval);
            }
        }, 1000); // Adapte o intervalo conforme necessário
        return () => clearInterval(interval);
    }, [visibleItems, items]);

    return (
        <main>
            <HeaderResponsive texto="Conheça a telemedicina" linkPath={linkPath} />
            <section className='banner-telepsychology'>
                <img className='img-banner' src={WomanCourse} alt="Mulher fazendo curso" />
                <Link to="/">
                    <img className='img-header' src={LogoHeader} alt='Logo Header' />
                </Link>
                <div className='box-link-telemedicina'>
                    <Link to="/">
                        <a className='link-telemedicina'>CONHEÇA A TELEMEDICINA</a>
                    </Link>
                </div>
                <button className='btn-schedule-telepsicologia' onClick={handleOpenDialog}>AGENDE TELEPSICOLOGIA</button>
                <ScheduleTelepsychology open={openDialog} onClose={handleCloseDialog} />
                <div className='content-texts-header-telepsychology'>
                    <h1>TELEPSICOLOGIA</h1>
                    <TransitionGroup className="texts-header-list">
                        {visibleItems.map((item, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <div className="texts-header-telepsychologyr">
                                    <FaCheck />
                                    <span>{item}</span>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <button className='btn-consult-now-telepsychology'>CONSULTE AGORA E SEM CARÊNCIA</button>
                <img className='camada' src={Camada2} alt="Camada" />
            </section>
            <section className='banner-telepsychology-responsive'>
                <div className='box-telepsychology-responsive'>
                    <h1>Telepsicologia</h1>
                    <TransitionGroup className="texts-header-list">
                        {visibleItems.map((item, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <div className="texts-responsive-telepsychology">
                                    <FaCheck />
                                    <span>{item}</span>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    <button className='btn-schedule-responsive' onClick={handleOpenDialog}>AGENDE TELEPSICOLOGIA</button>
                    <ScheduleTelepsychology open={openDialog} onClose={handleCloseDialog} />
                    <button className='btn-consult-responsive' >CONSULTE AGORA E SEM CARÊNCIA</button>
                </div>
            </section>
            <section className='plans-content-telepsychology'>
                <h1 className='title-plans-responsive'>CONHEÇA NOSSO PLANO</h1>
                <div className='plans-card-telepsychology'>
                    <img src={Promocao} alt="" />
                    <h1 className='title-gold-responsive'>TELEPSICOLOGIA GOLD</h1>
                    <div className='plans-text-you-gold'>
                        <h2>VOCÊ</h2>
                        <FaPlus />
                        <h3>3 dependentes</h3>
                    </div>
                    <div className='plans-value-gold'>
                        <h2>R$ 99,90</h2>
                        <h3>/Mês</h3>
                    </div>
                    <div>
                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>Saúde Mental em todo lugar;</span>
                        </div>
                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>Consulta com Psicólogos;</span>
                        </div>
                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>4 Sessões por mês;</span>
                        </div>

                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>Com agendamento prévio;</span>
                        </div>
                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>Sem Carência;</span>
                        </div>
                        <div className='text-icons-gold'>
                            <FaCheck />
                            <span>Sem pagamento adicional.</span>
                        </div>
                    </div>
                    <div className='plans-anual-gold'>
                        <span>Plano anual pago por pix, boleto ou cartão de crédito</span>
                    </div>
                    <span>Valores parcelados podem ter juros</span>
                    <h2>3 MESES GRÁTIS</h2>
                    <span>25% de desconto</span>
                    <button>QUERO ESSE</button>
                </div>
            </section>

            <div className='mockup-telepsychology'>
                <div className='circle-telepsychology'></div>
                <div className='texts-mockup-telepsychology'>
                    <h1>DESCUBRA UMA NOVA JORNADA PARA O BEM-ESTAR MENTAL COM A TELEPSICOLOGIA</h1>
                    <p>Bem-vindo à revolução da saúde Mental! na Telepsicologia, estamos aqui para transformar a maneira como você cuida do seu bem-estar emocional. Com a conveniência da terapia online, você está a um clique de distância de uma vida mais equilibrada e feliz.</p>
                </div>
                <img src={MockupTelepsicologia} alt="Mockup Telepsicologia" />
            </div>

            <div className='mockup-telepsychology-responsive'>
            </div>
            <div className='title-questions-telepsychology'>
                <h1>PERGUNTAS FREQUENTES</h1>
            </div>
            <AccordionItem
                title="O que é a telemedicina Doc4U?"
                content="
                    É um pronto atendimento digital que disponibiliza consultas
                    com médicos à distância. O serviço pode ser usado em situações
                    de baixa e média complexidade. Para casos graves, procure
                    imediatamente um hospital para o atendimento adequado."
            />

            <AccordionItem
                title="Como funciona a telepsicologia?"
                content={
                    <div>
                        Você e sua família têm direito a um total de 4 consultas mensais com um Psicólogo (são 4 consultas por mês distribuídas entre o titular e seus dependentes e não 4 consultas por cada pessoa), com duração de até 40 minutos cada. Esse apoio profissional está disponível para todos (titular ou dependentes), pois acreditamos que todos merecem bem-estar emocional. A marcação se dará em até 48 horas. Está marcação obedecerá à disponibilidade da agenda do Psicólogo. A espera máxima é de 15 dias. Agende o primeiro atendimento – Segunda a Sexta – 09:00 – 18:00 (Horário de Brasília) <a target='blank' href="mailto:telepsicologia@doc4u.com.br">telepsicologia@doc4u.com.br</a>
                    </div>
                }
            />

            <AccordionItem
                title="Quem são considerados meus dependentes?"
                content="
                    Ampliamos a definição de família para incluir até o segundo grau de parentesco, cobrindo cônjuges, filhos, pais, avós, tios, tias, sogro, sogra e muito mais. ]
                    Nossa abordagem abrangente cuida de todos que são importantes para você.."
            />

            <AccordionItem
                title="Existe limite de idade?"
                content="
                    Sem restrições de idade, nossa Telemedicina foi pensada para atender 
                    a todas as faixas etárias, desde os pequenos até os mais experientes. 
                    Todos merecem o cuidado dedicado e compassivo que oferecemos."
            />
            <Footer />
            <button className='floating-button-whatsapp'>
                <img src={Whatsapp} alt="Whatsapp" />
            </button>
        </main>
    )
}