import React from 'react';

const Review = ({review}) => {
    return (
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
    
            <p className='text-left mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore at quia dignissimos a quidem, exercitationem recusandae reprehenderit, mollitia deleniti, odit ex nam. Sequi fuga nisi
            </p>
            <div class="flex items-center">
              <div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                  <img src={review.img} />
                </div>
              </div>
              <div className="">
                  <h4 className='text-xl'>{review.name}</h4>
                  <p>{review.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;