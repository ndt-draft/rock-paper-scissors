import Modal from "react-modal";
import ruleImage from "../images/image-rules-bonus.svg";
import { useState } from "react";
import { StyledRules } from "./style";

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Rules = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <StyledRules>
      <button onClick={openModal}>RULES</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={ruleImage} alt="rules" />
      </Modal>
    </StyledRules>
  );
};

export default Rules;
