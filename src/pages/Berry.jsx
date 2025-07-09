import React from 'react';
import PageCard from '../components/PageCard';
import BerryImage from '../assets/Berry.png';

function Berry() {
  const info = [
    {
      number: '3',
      name: 'Blueberry',
      flavour: 'Blueberyy fresh flavour',
      description: 'Experience the perfect blend of fresh,juicy oranges in every sip. Our smoothie is packed with natural vitamins, a brust of flavours and no adde preservaties',
      image: BerryImage,
      price: '5.99',
      bgColor: 'bg-[radial-gradient(circle,_rgba(106,76,146,0.6)_7%,_rgba(106,76,146,1)_35%)]',
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

export default Berry;