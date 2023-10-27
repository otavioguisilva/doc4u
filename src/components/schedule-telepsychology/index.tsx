import { useState } from "react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { FaArrowAltCircleRight } from "react-icons/fa";

// esse component esta pegando a mesma estilização do component ScheduleTelepsychologyNutritionist

export default function ScheduleTelepsychology({ open, onClose }) {

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <input className='input-step1' type="text" placeholder='Nome completo (titular do plano)' />
                        <input className='input-step1' type="number" placeholder='CPF (titular)' />
                        <input className='input-step1' type="email" placeholder='E-mail' />
                        <button onClick={handleNextStep}>Continuar <FaArrowAltCircleRight /></button>
                    </>
                );
            case 2:
                return (
                    <form className='form-step2'>
                        <h5>Para quais usuários você quer agendar a consulta?</h5>
                        <p>(É obrigatório usar as informações que foram cadastrados na aquisição do plano, além disso, faça na ordem: Nome completo, CPF, e-mail, período preferencial para atendimento - manhã, tarde e noite).</p>
                        <textarea className='input-description' placeholder='Digite aqui...' />
                        <button>Enviar <FaArrowAltCircleRight /></button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <Dialog maxWidth={'xl'} open={open} onClose={onClose}>
            <DialogContent style={{ width: 800, height: 500 }} className='dialog-schedule'>
                {renderForm()}
            </DialogContent>
        </Dialog>
    );

}