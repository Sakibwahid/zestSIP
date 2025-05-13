import React from 'react';
import PageCard from '../components/PageCard';
import GreenImage from '../assets/Green.png';
function Green() {
  const info = [
    {
      number: '1',
      name: 'Green',
      flavour: 'Orange apple',
      description: 'Experience the perfect blend of fresh,juicy oranges in every sip. Our smoothie is packed with natural vitamins, a brust of flavours and no adde preservaties',
      image: GreenImage,
      price: '5.99',
      bgColor: 'bg-[radial-gradient(circle,_rgba(107,142,35,0.6)_7%,_rgba(107,142,35,1)_35%)]',
    }
  ];
  return (
    <div className=''>
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

export default Green;