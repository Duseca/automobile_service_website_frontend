import { Link } from "react-router";
import YellowButton from "./YellowButton";

interface ModalProps {
  show: boolean;
  title: string;
  onClose: (val:any)=>void
}

const Modal: React.FC<ModalProps> = ({ show,title,onClose }) => {
  if (!show) return null;

  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Want to set things up now?</h2>
        <p className="text-[#83898F] mb-6">You can add your vehicle details right away — or skip this for later and explore your dashboard first.</p>
        <div className="space-y-5">
       <YellowButton wFull={true} text={title} handleClick={onClose} />
       <Link to={"/"} className="text-primary text-lg font-semibold ">Skip for now</Link>
       </div>
      </div>
    </div>
  )
}

export default Modal
