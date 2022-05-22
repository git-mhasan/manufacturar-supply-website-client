import React from 'react';

const Review = () => {
    return (
        <div className='my-5 md:my-8 lg:my-10'>
            <section className="mb-20 text-gray-700">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-6 text-accent">Testimonials</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                    <div className="mb-12 md:mb-0">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                className="rounded-full shadow-lg w-32" alt=''
                            />
                        </div>
                        <h5 className="text-xl font-semibold mb-4">Maria Smantha</h5>
                        <h6 className="font-semibold text-blue-600 mb-4">Web Developer</h6>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                            tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="mb-12 md:mb-0">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                                className="rounded-full shadow-lg w-32" alt=''
                            />
                        </div>
                        <h5 className="text-xl font-semibold mb-4">Lisa Cudrow</h5>
                        <h6 className="font-semibold text-blue-600 mb-4">Graphic Designer</h6>
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
                                ></path></svg>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid commodi.
                        </p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                    <div className="mb-0">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                className="rounded-full shadow-lg w-32" alt=''
                            />
                        </div>
                        <h5 className="text-xl font-semibold mb-4">John Smith</h5>
                        <h6 className="font-semibold text-blue-600 mb-4">Marketing Specialist</h6>
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
                                ></path></svg>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;