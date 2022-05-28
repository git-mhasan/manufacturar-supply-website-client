import React from 'react';

const ReviewCard = ({ image, name, designation, review, rating }) => {
    return (
        <div className="mb-12 md:mb-0">
            <div className="flex justify-center mb-6">
                <img
                    src={image}
                    className="rounded-full shadow-lg w-32" alt=''
                />
            </div>
            <h5 className="text-xl font-semibold mb-4">{name}</h5>
            <h6 className="font-semibold text-blue-600 mb-4">{designation}</h6>
            <p className="mb-4">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                </svg>
                {review}
            </p>

            <div className="rating rating-sm font-bold">
                {
                    rating < 6 ? `${rating} out of 5` : "5 out of 5"
                }
            </div>
        </div>
    );
};

export default ReviewCard;