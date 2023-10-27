import { useState, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles.css';

import PlansCard from '../../components/plans-cards';
import ScheduleTelepsychologyNutritionist from '../../components/schedule-telepsychology-nutritionist';

import ClinicaGeral from '../../assets/clinica-geral.png'
import Consultas from '../../assets/consultas-especialistas.png';
import Nutricionista from '../../assets/nutricionista.png';
import Psicologia from '../../assets/pisicologia.png'
import AccordionItem from '../../components/accordion';
import LogoHeader from '../../assets/logo-header.png';
import AdvertisingHeader from '../../assets/img-header.png';
import Element from '../../assets/element.png';
import ElementResponsive from '../../assets/elemento 5.svg';
import MockupCelular from '../../assets/mockup-celular.png';

import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import HeaderResponsive from '../../components/header-responsive';

export default function Home() {

    const items = [
        'Cabe no seu bolso',
        'Médicos 24 horas, todos os dias',
        'Receitas e atestados',
        'Pedidos de exames<br />válidos em todo Brasil',
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

    //props do link do header responsive
    const linkPath = "/telepsicologia";

    return (
        <div className='container'>
            <HeaderResponsive texto="CONHEÇA A TELEPSICOLOGIA" linkPath={linkPath} />
            <section className='banner'>
                <img className='logo-header' src={LogoHeader} alt="Logo" />
                <div className='box-link-telepsicologia'>
                    <Link to="/telepsicologia">
                        <a className='link-telepsicologia'>CONHEÇA A TELEPSICOLOGIA</a>
                    </Link>
                </div>
                <a className='btn-header-telemedicina' target='_blank' href="https://doc4u.rapidoc.tech/login?">ACESSO A TELEMEDICINA</a>
                <img className='img-advertising-header' src={AdvertisingHeader} alt="" />
                <div className='content-texts-header'>
                    <TransitionGroup className="texts-header-list">
                        {visibleItems.map((item, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <div className="texts-header">
                                    <FaCheck />
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                    {/* <button className='btn-schedule' onClick={handleOpenDialog}>AGENDE TELEPSICOLOGIA / NUTRICIONISTA</button>
                    <ScheduleTelepsychologyNutritionist open={openDialog} onClose={handleCloseDialog} /> */}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1089" height="867" viewBox="0 0 1089 867" fill="none">
                    <path d="M857.742 343.441C837.051 155.784 1016.63 38.9971 1089 0.876664V-9H-31V800.367H10.2081C669.538 1024.93 889.725 633.503 857.742 343.441Z" fill="#FAFAFA" />
                </svg>
                <div className='content-vector'>
                    <div className='vector'>
                        <img src={Element} alt="" />
                    </div>
                </div>


            </section>

            <section className="banner-responsive">
                <div className='box-banner-responsive'>
                    <TransitionGroup className="texts-header-list">
                        {visibleItems.map((item, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <div className="texts-icons-responsive">
                                    <FaCheck />
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    <a className='btn-responsive-telemedicina' target='_blank' href="https://doc4u.rapidoc.tech/login?">ACESSO A TELEMEDICINA</a>
                    <button onClick={handleOpenDialog}>AGENDE TELEPSICOLOGIA / NUTRICIONISTA</button>
                    <ScheduleTelepsychologyNutritionist open={openDialog} onClose={handleCloseDialog} />
                </div>
                <img src={ElementResponsive} alt="Element" />
            </section>

            <section className='box-cards-jobs'>
                <article className='cards-jobs'>
                    <div>
                        <img src={ClinicaGeral} alt="Clínico geral" />
                        <h3>Clínico geral</h3>
                    </div>
                    <ul>
                        <li>Ilimitado </li>
                        <li> 24h por dia</li>
                        <li> 7 dias por semana</li>
                        <li>Sem agendamento</li>
                        <li>Sem pagamento adicional</li>
                        <li>SEM CARÊNCIA</li>
                    </ul>
                </article>

                <article className='cards-jobs'>
                    <div>
                        <img src={Consultas} alt=" Consultas especialistas" />
                        <h3> Consultas especialistas</h3>
                    </div>
                    <ul>
                        <li>Ilimitadas</li>
                        <li>Mediante indicação do clínico geral</li>
                        <li>Com agendamento</li>
                        <li>Sem pagamento adicional</li>
                        <li>SEM CARÊNCIA</li>
                    </ul>
                </article>

                <article className='cards-jobs'>
                    <div>
                        <img src={Psicologia} alt="Psicologia" />
                        <h3> Psicologia</h3>
                    </div>
                    <ul>
                        <li>Até 4 consultas/mês</li>
                        <li>Com agendamento</li>
                        <li>Sem pagamento adicional</li>
                        <li>SEM CARÊNCIA</li>
                    </ul>
                </article>

                <article className='cards-jobs'>
                    <div>
                        <img src={Nutricionista} alt="Nutricionista" />
                        <h3> Nutricionista</h3>
                    </div>
                    <ul>
                        <li>1 consulta a cada 90 dias</li>
                        <li>Com agendamento</li>
                        <li>Sem pagamento adicional</li>
                        <li>SEM CARÊNCIA</li>
                    </ul>
                </article>

            </section>
            <div className='title-pans'>
                <h1>CONHEÇA NOSSOS PLANOS</h1>
            </div>
            <div>
                <PlansCard />
            </div>

            <div className='mockup'>
                <div className='circle-mockup'></div>
                <div className='texts-mockup'>
                    <h1>CONSULTAS NA PALMA DA MÃO</h1>
                    <p>Após selecionar o plano que melhor atende às suas necessidades e concluir a compra, você receberá suas credenciais de login para acessar a plataforma de telemedicina.</p>
                    <p>O procedimento é rápido e descomplicado, levando apenas alguns minutos.</p>
                </div>
                <img src={MockupCelular} alt="Mockup" />
            </div>
            <div className='mockup-responsive'>
                <div className='circle-mockup-responsive'></div>
                <div className='texts-mockup-responsive'>
                    <h1>CONSULTAS NA PALMA DA MÃO</h1>
                    <p>Após selecionar o plano que melhor atende às suas necessidades e concluir a compra, você receberá suas credenciais de login para acessar a plataforma de telemedicina.</p>
                    <p>O procedimento é rápido e descomplicado, levando apenas alguns minutos.</p>
                </div>
                <img src={MockupCelular} alt="Mockup" />
            </div>

            <div className='accordion'>
                <div className='title-questions'>
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
                    title="Qual o tempo de espera para ser atendido?"
                    content="  O início do pronto atendimento pode levar em média 15 minutos. Mas, normalmente ocorre muito rápido"
                />
                <AccordionItem
                    title="Como será marcada a consulta com o médico especialista?"
                    content="
                    Após o Clínico encaminhar o paciente para um médico especialista 
                    (Cardiologia, Dermatologia, Pediatria, Endocrinologia, Geriatria, 
                        Ginecologia, Neurologia, Psiquiatria, Traumatologia e Otorrinolaringologia) 
                        a marcação se dará em até 48 horas. Está marcação obedecera á disponibilidade 
                        da 
                    agenda do médico especialista. A espera máxima é de 15 dias."
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
                    title="Como funciona a Consulta a Nutricionista?"
                    content={
                        <div>
                            Você e sua família têm direito a uma consulta com uma Nutricionista a cada 90 dias. Esse apoio profissional está disponível para todos (titular ou dependentes), pois acreditamos que todos merecem bem-estar físico. A marcação se dará em até 48 horas. Está marcação obedecera a disponibilidade da agenda da Nutricionista. A espera máxima é de 15 dias.
                            Agende o primeiro atendimento – Segunda a Sexta – 09:00 – 18:00 (Horário de Brasília)  <a target='_blank' href="nutricao@doc4u.com.br">nutricao@doc4u.com.br</a>
                        </div>
                    }
                />
                <AccordionItem
                    title="Consigo fazer acompanhamento de doenças crônicas?"
                    content="
                    Doenças crônicas não devem controlar sua vida, e sim ser controladas por você. Nossos Clínicos estão prontos para fornecer o acompanhamento necessário, emitir receitas para diferentes situações, desde medicamentos comuns até os de controle especial, além de 
                    atestados e até solicitação de exames. Sua saúde está em boas mãos!"
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

            </div>
            <Footer />
            <div>
                <button className='floating-button'>
                    CONSULTE AGORA E SEM CARÊNCIA
                </button>
            </div>
        </div>
    )
}