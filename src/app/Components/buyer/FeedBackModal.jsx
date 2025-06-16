import { useState } from "react";
import { Star } from "lucide-react";

const FeedBackModal = ({ booking, onClose }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (rating === 0) {
    alert("Please give a rating before submitting.");
    return;
  }
  console.log("⭐:", rating);
  console.log("💬:", feedback);
  onClose();
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-blue-50  shadow-2xl dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          FEEDBACK FOR "{booking.PropertyName}"
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Star Rating */}
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  (hover || rating) >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 dark:text-gray-300">
              {rating} Star{rating > 1 && "s"}
            </span>
          </div>

          {/* Feedback Text */}
          <textarea
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-24 p-2 border border-gray-300 dark:border-gray-600 rounded resize-none focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-white"
            placeholder="Write your feedback..."
          />

          {/* Buttons */}
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBackModal;
