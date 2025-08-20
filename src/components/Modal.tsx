import { Link } from "react-router";
import YellowButton from "./YellowButton";

interface ModalProps {
  show: boolean;
  title: string;
  onClose: (val:any)=>void
  link?:string;
  description?:string;
  modalTitle?:string;
  bottomText?:string;
}

const Modal: React.FC<ModalProps> = ({ show,title, modalTitle="Want to set things up now?",  
  description="You can add your vehicle details right away — or skip this for later and explore your dashboard first.",
  onClose, link, bottomText="Skip for now", }) => {
  if (!show) return null;

  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2>
        <p className="text-[#83898F] mb-6">{description}</p>
        <div className="space-y-5 flex flex-col">
          <Link  to={link ? link : "/"} className="my-3">
       <YellowButton wFull={true} text={title} handleClick={onClose} /></Link>
    
       <Link to={'/'} className="text-primary text-lg font-semibold ">{bottomText? bottomText:  'Skip for now' }</Link>
       </div>
      </div>
    </div>
  )
}

export default Modal
