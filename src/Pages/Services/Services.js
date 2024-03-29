import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from '../service/Service';



const Services = () => {
  const services =[
    {
    _id:1,
    name:'Fluoride Treatment',
    description: '',
    img : fluoride
  },
    {
    _id:2,
    name:'Cavity Filling',
    description: '',
    img : cavity
  },
    {
    _id:3,
    name:'Teth Whitening',
    description: '',
    img : whitening
  },

]

    return (
      <div className="my-28 bg-white">
        <div className="">
          <h1 className="text-cyan-500 text-xl font-bold uppercase">Our service</h1>
          <h2 className="text-4xl text-black mb-10 font-bold">Services We Provide</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center">
          {
          services.map(service =>
            <Service key={service._id} 
            service={service}
            >

            </Service>)
          }
        </div>
      </div>
    );
};

export default Services;