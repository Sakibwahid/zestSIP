import React from 'react';
import PageCard from '../components/PageCard';
import OrangeImage from '../assets/Orange.png';

function Orange() {
  const info = [
    {
      number: '2',
      name: 'Orange',
      flavour: 'Orange apple',
      description: 'Experience the perfect blend of fresh,juicy oranges in every sip. Our smoothie is packed with natural vitamins, a brust of flavours and no adde preservaties',
      image: OrangeImage,
      price: '6.99',
      bgColor: 'bg-[radial-gradient(circle,_rgba(216,124,74,0.6)_7%,_rgba(216,124,74,1)_35%)]',
    }
  ];
  return (
    <div className='relative'>
      {info.map((info, index) => (
          <PageCard
            key={index}
            number={info.number}
            name={info.name}
            description={info.description}
            bgColor={info.bgColor} 
            image={info.image}
            flavour={info.flavour}
            price={info.price}
          />
        ))}
    </div>
  )
}

export default Orange;