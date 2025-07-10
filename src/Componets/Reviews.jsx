import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            user: 'shahid',
            image: '../../src/assets/img/pic1.png',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
        },
        {
            user: 'nihal',
            image: '../../src/assets/img/pic2.png',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
        },
        {
            user: 'aslah',
            image: '../../src/assets/img/pic3.png',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
        }
    ];

    return (
        <div className="w-screen h-screen  p-4 flex flex-wrap justify-center items-center gap-4">
            {reviews.map((user) => (
                <div key={user.user} className="w-80 h-fit p-4 flex flex-col justify-center items-center border rounded shadow-md">
                    <p className="mb-4 text-sm text-gray-700">{user.review}</p>
                    <div className="w-20 h-14 overflow-hidden rounded-full">
                        <img
                            src={user.image}
                            alt={user.user}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-2 text-center font-semibold capitalize">{user.user}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
