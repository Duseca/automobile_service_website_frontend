import { useState } from "react";
import {StarIcon } from "./Icons";
import ReviewForm from "../pages/Profile/ReviewForm";
import YellowButton from "./YellowButton";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewServiceProviderModal = ({ isOpen, onClose }: ReviewModalProps) => {
      const [showForm, setShowForm] = useState(false);

  const reviews = {
    overallRating: 4.4,
    totalRatings: 923,
    totalReviews: 257,
    ratingBreakdown: [
      { stars: 5, count: 92, percentage: 85 },
      { stars: 4, count: 65, percentage: 60 },
      { stars: 3, count: 40, percentage: 35 },
      { stars: 2, count: 15, percentage: 15 },
      { stars: 1, count: 8, percentage: 8 },
    ],
    reviews: [
      {
        id: 1,
        name: "Jill Luke",
        rating: 4.2,
        date: "25 February 2025",
        comment:
          "Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisl odio...",
      },
      {
        id: 2,
        name: "Mark Spencer",
        rating: 3.8,
        date: "19 March 2025",
        comment:
          "Suspendisse potenti. Curabitur ut dui ac lectus lacinia vehicula...",
      },
    ],
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  if (!isOpen) return null;
  return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6 m-5 relative max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          ✕
        </button>

        {/* Toggle: Reviews OR Form */}
        {!showForm ? (
          <div>
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                All {reviews.totalReviews} Reviews
              </h2>
              <hr className="text-gray-300" />
            </div>

            {/* Overall Rating + Breakdown */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold text-gray-900">
                    {reviews.overallRating}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {reviews.totalRatings} Ratings and {reviews.totalReviews}{" "}
                  Reviews
                </div>
              </div>

              <div className="space-y-2 flex-1">
                {reviews.ratingBreakdown.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-semibold">
                      {rating.stars} Stars
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-8">
                      ({rating.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6 my-6">
              {reviews.reviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-sm text-[#83898F]">
                          {review.rating}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
<YellowButton wFull={true} text="Write your review" handleClick={()=>setShowForm(true)} />
          </div>
        ) : (
          // Review Form
        <ReviewForm setShowForm={setShowForm} />
        )}
      </div>
    </div>

  )
}

export default ReviewServiceProviderModal
