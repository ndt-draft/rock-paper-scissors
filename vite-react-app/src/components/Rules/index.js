import Modal from "react-modal";
import ruleImage from "@images/image-rules-bonus.svg";
import closeImage from "@images/icon-close.svg";
import { useState } from "react";
import { StyledRules, ModalHeading, ModalClose } from "./style";
import useIsMobile from "@/hooks/useIsMobile";

const defaultStyles = {
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

  const isMobile = useIsMobile();
  const dynamicStyles = {
    overlay: {
      background: isMobile ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.6)",
    },
    content: {
      ...defaultStyles.content,
      border: "none",
    },
  };

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
        style={dynamicStyles}
        contentLabel="Rules"
      >
        <ModalHeading>RULES</ModalHeading>
        <img src={ruleImage} alt="rules" />
        <ModalClose onClick={closeModal}>
          <img src={closeImage} alt="close" />
        </ModalClose>
      </Modal>
    </StyledRules>
  );
};

export default Rules;
