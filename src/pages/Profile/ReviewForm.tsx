import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import YellowButton from "../../components/YellowButton";
const ReviewForm = ({setShowForm}:{setShowForm: (val:any)=>void}) => {
  const [rating, setRating] = useState(3);
  const [reviewType, setReviewType] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [feedback, setFeedback] = useState('');

  const reviewOptions = ['Product', 'Service', 'Experience', 'Support'];
  const itemOptions = ['The Gloss Finish', 'Matte Finish', 'Premium Edition', 'Standard Edition'];

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <button
        key={index}
        onClick={() => setRating(index + 1)}
        className="focus:outline-none transition-colors duration-200"
      >
        <svg
          className={`w-8 h-8 ${
            index < rating ? 'text-orange-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
    ));
  };

  return (
    <div >
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            How Was Your Experience?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Share your feedback to help others choose better — and to help providers improve.
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-8">
          {renderStars()}
        </div>

        {/* Review Type Dropdown */}
        <div className="mb-6">
         <Dropdown
            label="What do you want to review?"
            name="reviewname"
            value={reviewType}
            options={reviewOptions}
            onChange={(e) => {
                      setReviewType(e.target.value);
                    }}
          />
        </div>

        <div className="mb-6">
         <Dropdown
            label="Select Item"
            name="item"
            value={selectedItem}
            options={itemOptions}
            onChange={(e) => {
                      setSelectedItem(e.target.value);
                    }}
          />
        </div>
        <div className="mb-8">
          <label className="block text-sm font-semibold text-black mb-2">
            Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your review..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 placeholder:text-black rounded-lg resize-none focus:outline-none focus:ring
             focus:ring-primary focus:border-transparent text-gray-700 "
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <YellowButton wFull={true} text="Submit review"/>
          <button
          onClick={()=> setShowForm(false)}
            className="w-full text-primary cursor-pointer font-medium py-2 transition-colors duration-200 focus:outline-none"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
