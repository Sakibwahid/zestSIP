import React from 'react';
import PageCard from '../components/PageCard';
import StrawberryImage from '../assets/Strawberry.png';
function Strawberry() {
  const info = [
    {
      number: '4',
      name: 'Strawberry',
      flavour: 'Blueberyy fresh flavour',
      description: 'Experience the perfect blend of fresh,juicy oranges in every sip. Our smoothie is packed with natural vitamins, a brust of flavours and no adde preservaties',
      image: StrawberryImage,
      price: '5.99',
      bgColor: 'bg-[radial-gradient(circle,_rgba(209,93,114,0.6)_7%,_rgba(209,93,114,1)_35%)]',
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

export default Strawberry;