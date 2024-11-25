import React, { useState } from 'react';

export default function Reviews() {
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewContent, setReviewContent] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleTitleChange = (e) => setReviewTitle(e.target.value);
    const handleContentChange = (e) => setReviewContent(e.target.value);

    const handleSubmitReview = () => {
        if (reviewTitle && reviewContent) {
            const newReview = {
                title: reviewTitle,
                content: reviewContent,
                date: new Date().toLocaleDateString(),
            };
            setReviews((prevReviews) => [...prevReviews, newReview]);
            setReviewTitle('');
            setReviewContent('');
        }
    };

    const renderReviews = () => {
        return reviews.map((review, index) => (
            <div key={index}>
                <h4>{review.title}</h4>
                <p>{review.date}</p>
                <p>{review.content}</p>
            </div>
        ));
    };

    return (
        <div>
            <h2>Post a Game Review</h2>
            <input
                type="text"
                value={reviewTitle}
                onChange={handleTitleChange}
                placeholder="Review Title"
            />
            <br />
            <textarea
                value={reviewContent}
                onChange={handleContentChange}
                placeholder="Write your review here..."
            />
            <br />
            <button onClick={handleSubmitReview}>Submit</button>

            <h3>All Reviews</h3>
            {renderReviews()}
        </div>
    );
}
