import { useState } from "react";

type GameReviewProps = {
  name: string;
  desc: string;
  review: number;
  image: string | null;
};

const GameReview = ({ name, desc, review, image }: GameReviewProps) => {
  return (
    <div className="flex flex-col gap-2 border border-solid">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Description:</strong> {desc}
      </div>
      <div>
        <strong>Review:</strong> {review}
      </div>
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
    setShowReview(false);
  };

  return (
    <>
      {reviews.map((review, index) => (
        <GameReview key={index} {...review} />
      ))}
      <div>
        <button
          style={{ border: "1px solid #eee" }}
          onClick={() => setShowReview(true)}
        >
          New review
        </button>
      </div>
      {showReview && (
        <div className="p-4">
          <div>
            <p>Name:</p>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Description:</p>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="desc"
              value={newReview.desc}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Score:</p>{" "}
            <input
              style={{ border: "1px solid #eee" }}
              name="review"
              type="number"
              value={newReview.review}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={addReview}>Add Review</button>
        </div>
      )}
    </>
  );
};
