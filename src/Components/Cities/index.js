import React from 'react';

const cities = [
  {
    name: 'Москва',
    population: '12,7 млн',
    description: 'Столица России, крупный культурный и исторический центр.',
  },
  {
    name: 'Санкт-Петербург',
    population: '5,4 млн',
    description: 'Известен своими каналами, мостами и богатой историей.',
  },
  {
    name: 'Новосибирск',
    population: '1,6 млн',
    description: 'Центр науки и технологий с богатой историей.',
  },
  
];

function App() {
  return (
    <div>
      <h1>Информация о городах моей страны</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <h2>{city.name}</h2>
            <p>Население: {city.population}</p>
            <p>{city.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;