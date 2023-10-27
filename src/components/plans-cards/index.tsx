import { FaCheck, FaPlus } from 'react-icons/fa'

import './styles.css';

import Promocao from '../../assets/promocao.png';

export default function PlansCard() {

    return (
        <>
            <div className='box-cards'>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 1</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                    </div>
                    <div className='plans-price'>
                        <h1>R$49,90</h1>
                        <h4>/mês</h4>
                    </div>

                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Clínicos;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Especialistas;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consulta com Nutricionista;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Receitas e Atestados;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Pedidos de exames válidos em todo Brasil.</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>

                    <h1>3 MESES GRÁTIS</h1>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                    <div className='btn-choose'>
                        <button>QUERO ESSE<a href="https://pay.hotmart.com/N87709931O" /></button>
                    </div>
                </div>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 3</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                        <FaPlus />
                        <h4>2 dependentes</h4>
                    </div>
                    <div className='plans-price'>
                        <h1>R$99,90</h1>
                        <h4>/mês</h4>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Clínicos;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Especialistas;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consulta com Nutricionista;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Receitas e Atestados;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Pedidos de exames válidos em todo Brasil.</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>
                    <h1>3 MESES GRÁTIS</h1>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                    <div className='btn-choose'>
                        <button>QUERO ESSE</button>
                    </div>
                </div>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 5</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                        <FaPlus />
                        <h4>4 dependentes</h4>
                    </div>
                    <div className='plans-price'>
                        <h1>R$159,90</h1>
                        <h4>/mês</h4>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Clínicos;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas ilimitadas com Especialistas;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consulta com Nutricionista;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Receitas e Atestados;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Pedidos de exames válidos em todo Brasil.</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>
                    <h1>3 MESES GRÁTIS</h1>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                    <div className='btn-choose'>
                        <button>QUERO ESSE</button>
                    </div>
                </div>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 1 PLUS</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                    </div>
                    <div className='plans-price'>
                        <h1>R$119,80</h1>
                        <h4>/mês</h4>
                    </div>

                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <h5>TUDO DO PLANO BLACK 1+;</h5>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Saúde Mental em todo lugar;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>04 Consultas com Psicólogos/mês;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Com agendamento prévio.</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>

                    <h1>3 MESES GRÁTIS</h1>
                    <div className='btn-choose'>
                        <button>QUERO ESSE</button>
                    </div>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                </div>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 3 PLUS</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                        <FaPlus />
                        <h4>2 dependentes</h4>
                    </div>
                    <div className='plans-price'>
                        <h1>R$169,80</h1>
                        <h4>/mês</h4>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <h5>TUDO DO PLANO BLACK 3+;</h5>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Saúde Mental em todo lugar;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>04 Consultas com Psicólogos/mês;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Com agendamento prévio.</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas distribuídas entre o titular e seus dependentes</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>
                    <h1>3 MESES GRÁTIS</h1>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                    <div className='btn-choose'>
                        <button>QUERO ESSE</button>
                    </div>
                </div>
                <div className='plans-card'>
                    <img src={Promocao} alt="Promoção" />
                    <h1>BLACK 5 PLUS</h1>
                    <div className='plans-text-you-plus'>
                        <h3>Você</h3>
                        <FaPlus />
                        <h4>4 dependentes</h4>
                    </div>
                    <div className='plans-price'>
                        <h1>R$229,80</h1>
                        <h4>/mês</h4>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <h5>TUDO DO PLANO BLACK 5+;</h5>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Saúde Mental em todo lugar;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>04 Consultas com Psicólogos/mês;</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Com agendamento prévio.</span>
                    </div>
                    <div className='plans-icons-text'>
                        <FaCheck style={{ color: '#0B70E3' }} size={32} />
                        <span>Consultas distribuídas entre o titular e seus dependentes</span>
                    </div>
                    <div className='plans-annual-text'>
                        <h5>Plano anual pago por pix, boleto ou cartão de crédito</h5>
                    </div>
                    <div className='plans-value-text'>
                        <span>Valores parcelados podem ter juros</span>
                    </div>
                    <h1>3 MESES GRÁTIS</h1>
                    <div className='plans-discount-text'>
                        <span>25% DE DESCONTO</span>
                    </div>
                    <div className='btn-choose'>
                        <button>QUERO ESSE</button>
                    </div>
                </div>
            </div>
        </>
    );
}


