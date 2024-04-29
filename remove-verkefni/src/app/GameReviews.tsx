import { useState } from "react";

type GameReviewProps = {
  name: string;
  desc: string;
  review: number;
  image: string | null;
  onRemoveReview: () => void
};

const GameReview = ({ name, desc, review, image, onRemoveReview }: GameReviewProps) => {
  return (
    <div className="flex flex-col gap-2 border-solid border-black text-nowrap border-4 w-min p-3">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Description:</strong> {desc}
      </div>
      <div>
        <strong>Review:</strong> {review}
      </div>
      <button className="flex text-nowrap w-min border justify-start bg-red-300" onClick={() => onRemoveReview()}>Remove Review</button>
    </div>
  );
};

export default () => {
  const [reviews, setReviews] = useState([
    { name: "fifa", desc: "football game", review: 10, image: null },
  ]);
  const [showReview, setShowReview] = useState(false);

  const [newReview, setNewReview] = useState({
    name: "",
    desc: "",
    review: 0,
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const addReview = () => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ name: "", desc: "", review: 0, image: null });
    setShowReview(false);
  };

  const handleRemoveReview = (index: number) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <>
      {reviews.map((review, index) => (
        <GameReview
          key={index}
          {...review}
          onRemoveReview={() => handleRemoveReview(index)}
        />
      ))}

      <button onClick={() => setShowReview(!showReview)}>Toggle Remove Button</button>

      <div className="p-3">
        <button
          className="font-bold text-nowrap w-min bg-gray-200 "
          onClick={() => setShowReview(true)}
        >
          New review
        </button>
      </div>
      {showReview && (
        <div className="p-4 gap-2 flex flex-col">
          <div>
            <strong>Name:</strong>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <strong>Description:</strong>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="desc"
              value={newReview.desc}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <strong>Score:</strong>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="review"
              type="number"
              value={newReview.review}
              onChange={handleInputChange}
            />
          </div>
          <button 
          className="bg-green-300 text-nowrap w-min font-bold"
          onClick={addReview}>Add Review</button>
        </div>
      )}
    </>
  );
};
