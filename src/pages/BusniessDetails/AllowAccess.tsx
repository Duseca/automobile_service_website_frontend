import { useEffect, useState } from "react";
import Modal from "../../components/Modal";


const AllowAccess = () => {
      const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
  <div>
      <Modal
        show={showModal}
        title="Resend SMS"
        onClose={handleClose}
        link="/" 
        modalTitle="Almost There!"
        description="We’ve sent a verification link to your mobile. Please check your inbox and verify your email to publish your service or product."
        bottomText="Close"
      />
    </div>
  )
}

export default AllowAccess
