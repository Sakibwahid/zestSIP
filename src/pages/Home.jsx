import React from 'react';
import JuiceCard from '../components/Juicecard';
import Navbar from '../components/Navbar';


function Home() {

  const juices = [
    {
      number: '01',
      name: 'Green',
      description: 'Green apple',
      image: 'src/assets/Green.png',
      price: '5.99',
      hoverColor: '#6B8E23',
       linkTo: '/green'
    },  
    {
      number: '02',
      name: 'Orange',
      description: 'Fresh orange flavour',
      image: 'src/assets/Orange.png',
      price: '5.99',
      hoverColor: '#D87C4A',
       linkTo: '/orange'
    },
    {
      number: '03',
      name: 'Berry',
      description: 'Absoulute dense',
      image: 'src/assets/Berry.png',
      price: '5.99',
      hoverColor: '#6A4C92',
       linkTo: '/berry'

    },
    {
      number: '04',
      name: 'Strawbery',
      description: 'Strawberry mix',
      image: 'src/assets/Strawberry.png',
      price: '5.99',
      hoverColor: '#D15D72',
       linkTo: '/strawberry'
    },
  ];
  return (
    
    <div className='h-screen'>
      <Navbar></Navbar>
      <div className='w-full h-full grid grid-cols-2 md:grid-cols-4 items-center shadow-xl rounded-2xl'>
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
)
}

export default Home;
