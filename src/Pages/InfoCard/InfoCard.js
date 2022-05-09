import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
    return (
      <div class={`card lg:card-side  shadow-xl ${bgClass}`}>
        <figure className="pl-5 sm:mt-5 ">
          <img src={img} />
        </figure>
        <div class="card-body text-left text-white">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;