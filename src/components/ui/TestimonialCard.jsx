import React from 'react';

function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white dark:bg-dark-priceCardBg rounded-lg shadow-lg px-7 py-5 mb-6 h-full flex flex-col justify-between">
            <p className="my-5 text-gray-600 dark:text-white text-lg font-normal flex-grow overflow-hidden">
                {testimonial.description}
            </p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-16 rounded-full"
                    />
                    <div>
                        <h5 className="text-lg font-mono text-black dark:text-white">
                            {testimonial.name}
                        </h5>
                        <div className="flex items-center">
                            {[...Array(testimonial.stars)].map((_, i) => (
                                <span key={i} className="text-yellow-500 text-lg">
                                    &#9733;
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <figure>
                    <img src="/comma.png" alt="comma" className="w-12" />
                </figure>
            </div>
        </div>
    );
}

export default TestimonialCard;
