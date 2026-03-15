import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./styles/CustomModal.css";

export const showCustomModal = (title: string, message: string) => {
  window.dispatchEvent(
    new CustomEvent("showCustomModal", { detail: { title, message } })
  );
};

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({ title: "", message: "" });

  useEffect(() => {
    const handleShowModal = (e: any) => {
      setContent(e.detail);
      setIsOpen(true);
    };
    window.addEventListener("showCustomModal", handleShowModal);
    return () => window.removeEventListener("showCustomModal", handleShowModal);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="custom-modal-close" onClick={() => setIsOpen(false)}>
          <MdClose />
        </button>
        <h2 className="custom-modal-title">{content.title}</h2>
        <div className="custom-modal-body">
          {content.message.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
