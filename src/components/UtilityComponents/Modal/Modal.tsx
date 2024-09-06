import './Modal.css';

type ModalProps = {
    content: React.ReactNode;
    isVisible: boolean;
    onClose: () => void;
}
export default function Modal({ content, isVisible, onClose }: ModalProps) {
  if (!isVisible) return null; // Do not render if not visible

  return (
    <div className="modal" role='dialog' aria-modal='true'>
      <div className="modal-content">
        <button className="close" onClick={onClose} aria-label='close Modal'>&times;</button>
        {content}
      </div>
    </div>
  );
}
