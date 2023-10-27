import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import './styles.css'

export default function AccordionItem({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <button>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isOpen && <div className="accordion-content">
        <p>{content}</p>
      </div>}
    </div>
  )
}