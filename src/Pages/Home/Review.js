import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import ReviewCard from './ReviewCard';

const Review = () => {

    const imgs = [
        "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
        "https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",
        "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
        "https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg",
        "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
    ]

    const { isLoading, error, data: reviews } = useQuery('allReviews', () =>
        fetch(`${url}reviews`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Reviews</h2>
            <Spinner></Spinner>
        </div>
    }
    if (error) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Reviews</h2>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Data could not be Loaded.</h2>
        </div>
    }


    return (
        <div className='my-5 md:my-8 lg:my-10'>
            <section className="mb-20 text-gray-700">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-6 text-accent">Review</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                    {
                        reviews.map((review, index) => <ReviewCard
                            key={index}
                            image={imgs[Math.ceil(Math.random() * 4)]}
                            name={review.userName}
                            designation={review.designation}
                            review={review.review}
                            rating={review.ratings}
                        ></ReviewCard>)
                    }


                </div>
            </section>
        </div>
    );
};

export default Review;