import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { MdUpload } from "react-icons/md";
import YellowButton from "../../../components/YellowButton";

interface RequestAReturnProps {
  onClose: () => void;
}
const RequestAReturn = ({ onClose }: RequestAReturnProps) => {
      const [isOpen, setIsOpen] = useState(true);
  const [selectedReason, setSelectedReason] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const returnReasons = [
    'Wrong item',
    'Item damaged',
    'Item not as described',
    'Changed my mind',
    'Quality issues',
    'Size issues',
    'Other'
  ];

  const handleReasonSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSelectedReason(e.target.value)
  };

  const handleFileUpload = () => {
    
  };


  const handleSubmit = () => {
    if (!selectedReason) {
      alert('Please select a reason for return');
      return;
    }
    alert('Return request submitted successfully!');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Request a Return</h2>
        <p className="text-[#83898F] text-sm mb-5 ">Let us know why you're returning the product so we can process your request smoothly.</p>
         <div className="space-y-6">
          {/* Choose Reason */}
          <div>
                <Dropdown
                label={"Choose Reason"}
                name={"reason"}
                 value={"selectedReason"}
                  options={returnReasons}
                  onChange={handleReasonSelect}
                />
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-sm font-medium text-black  mb-2">
              Attachments
            </label>
            <div className="space-y-3">
              {/* Upload Area */}
              <label className="flex items-center space-x-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
               <MdUpload />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Upload files</div>
                  <div className="text-xs text-gray-500">
                    {'No files attached'}
                  </div>
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
              </label>

            </div>
          </div>

          {/* Add More Details */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Add More Details (Optional)
            </label>
            <textarea
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              placeholder="e.g. The product was scratched..."
              rows={4}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Footer Buttons */} <div className="flex flex-col space-y-4 mt-6">
          <YellowButton text="Submit Request" wFull={true}  handleClick={handleSubmit} />
          <button
            onClick={onClose}
              className="text-primary text-lg font-semibold cursor-pointer "
          >
            Cancel
          </button>
        </div>
        </div>
    </div>
  )
}

export default RequestAReturn
