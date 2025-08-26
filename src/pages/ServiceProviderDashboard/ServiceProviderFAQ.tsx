import { useState } from "react";
import YellowButton from "../../components/YellowButton";

const ServiceProviderFAQ = () => {
    const [faqList, setFaqList] = useState([
    {
      id: "FAQ 1",
      question: "What is your return or refund policy?",
      answer:
        "We accept returns within 7 days if the product is unused and in original packaging. Refunds are issued within 3-5 business days.",
    },
    {
      id: "FAQ 2",
      question: "Do you offer home delivery?",
      answer:
        "Yes, we provide home delivery within city limits. Delivery charges may apply depending on the location.",
    },
    {
      id: "FAQ 3",
      question: "Do your products come with a warranty?",
      answer:
        "Yes, most of our products come with a 6-month warranty. Please check the product page for warranty details.",
    },
    {
      id: "FAQ 4",
      question: "Can I change or cancel my order after placing it?",
      answer:
        "Yes, you can cancel or modify your order within 24 hours by contacting our customer support team.",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({ question: "", answer: "" });

  const handleEdit = (index: number) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditData({
      question: faqList[index].question,
      answer: faqList[index].answer,
    });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updatedFAQs = [...faqList];
    updatedFAQs[editIndex] = {
      ...updatedFAQs[editIndex],
      question: editData.question,
      answer: editData.answer,
    };
    setFaqList(updatedFAQs);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure you want to delete this FAQ?")) {
      const updatedFAQs = faqList.filter((_, i) => i !== index);
      setFaqList(updatedFAQs);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isEditing && editIndex !== null) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg">
        {/* Edit Mode */}
        <div className="mb-4">
          <span className="text-sm text-blue-500 font-medium">
            {faqList[editIndex].id}
          </span>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <input
              type="text"
              value={editData.question}
              onChange={(e) => handleInputChange("question", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              value={editData.answer}
              onChange={(e) => handleInputChange("answer", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleSave}
            className="flex-1 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
   <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2">FAQs</h1>
        <p className="text-[#83898F] mb-8">
          Add answers to common questions about services, pickup, delivery, and
          warranties.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqList.map((faq, index) => (
          <div
            className="p-4 bg-white border border-gray-200 rounded-lg"
            key={faq.id}
          >
            {/* View Mode */}
            <div className="mb-4">
              <span className="text-sm bg-light-blue rounded-2xl px-2 py-1 text-primary font-medium">
                {faq.id}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {faq.question}
            </h2>

            <div className="relative mb-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed pl-6">{faq.answer}</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handleEdit(index)}
                className="flex-1 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="flex-1 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-end space-x-3 my-5">
      <YellowButton wFull={false} text="Save changes" />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
    </div>
  )
}

export default ServiceProviderFAQ;
