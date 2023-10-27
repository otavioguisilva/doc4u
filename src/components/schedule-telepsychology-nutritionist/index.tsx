import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import './styles.css';

import { FaArrowAltCircleRight} from 'react-icons/fa';

export default function ScheduleTelepsychologyNutritionist({ open, onClose }) {

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <input  className='input-step1'  type="text" placeholder='Nome completo (titular do plano)' />
            <input  className='input-step1' type="number" placeholder='CPF (titular)' />
            <input  className='input-step1' type="email" placeholder='E-mail' />
            <h1>Escolha o que você quer marcar</h1>
            <div className='content-checkbox-dialog'>
              <div className='checkbox-dialog'>
                <input type="radio" />
                <span>Telepsicologia (4 consultas/mês por Plano)</span>
              </div>
              <div className='checkbox-dialog'>
                <input type="radio" />
                <span>Nutrição (1 consulta para os usuários do Plano a cada 90 dias)</span>
              </div>
            </div>
            <button onClick={handleNextStep}>Continuar <FaArrowAltCircleRight /></button>
          </>
        );
      case 2:
        return (
          <form className='form-step2'>
            <h5>Para quais usuários você quer agendar a consulta?</h5>
            <p>(É obrigatório usar as informações que foram cadastrados na aquisição do plano, além disso, faça na ordem: Nome completo, CPF, e-mail, período preferencial para atendimento - manhã, tarde e noite).</p>
            <textarea className='input-description' placeholder='Digite aqui...' />
            <button>Enviar <FaArrowAltCircleRight/></button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog maxWidth={'xl'} open={open} onClose={onClose}>
      <DialogContent style={{ width: 800, height:600 }} className='dialog-schedule'>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
}
