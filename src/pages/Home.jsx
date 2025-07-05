import React from 'react';
import JuiceCard from '../components/Juicecard';
import Navbar from '../components/Navbar';
import GreenImage from '../assets/Green.png';
import OrangeImage from '../assets/Orange.png';
import BerryImage from '../assets/Berry.png';
import StrawberryImage from '../assets/Strawberry.png';

function Home() {
  const juices = [
    {
      number: '01',
      name: 'Green',
      description: 'Green apple',
      image: GreenImage,
      price: '5.99',
      hoverColor: '#6B8E23',
      linkTo: '/green'
    },
    {
      number: '02',
      name: 'Orange',
      description: 'Fresh orange flavour',
      image: OrangeImage,
      price: '5.99',
      hoverColor: '#D87C4A',
      linkTo: '/orange'
    },
    {
      number: '03',
      name: 'Berry',
      description: 'Absoulute dense',
      image: BerryImage,
      price: '5.99',
      hoverColor: '#6A4C92',
      linkTo: '/berry'
    },
    {
      number: '04',
      name: 'Strawbery',
      description: 'Strawberry mix',
      image: StrawberryImage,
      price: '5.99',
      hoverColor: '#D15D72',
      linkTo: '/strawberry'
    },
  ];

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center shadow-xl rounded-2xl'>
        {juices.map((juice, index) => (
          <JuiceCard
            key={index}
            number={juice.number}
            name={juice.name}
            description={juice.description}
            hoverColor={juice.hoverColor}
            image={juice.image}
            linkTo={juice.linkTo}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
