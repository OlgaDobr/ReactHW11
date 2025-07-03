import React, { Component } from 'react';


const bands = [
  {
    id: 1,
    name: 'Руки вверх',
    genre: 'Pop',
    yearFormed: 1995,
    description: 'Российская музыкальная поп-группа. До августа 2006 года состояла из Сергея Жукова и Алексея Потехина.'
  },
  {
    id: 2,
    name: 'The Cranberries',
    genre: 'Rock',
    yearFormed: 1989,
    description: 'Ирландская рок-группа, созданная в 1989 году и добившаяся мировой известности в 1990-х.'
  },
  {
    id: 3,
    name: 'Spice Girls',
    genre: 'Pop',
    yearFormed: 1994,
    description: 'Британская женская поп-группа, образованная в Лондоне в 1994 году.'
  }
];


class BandCard extends Component {
  render() {
    const { name, genre, yearFormed, description } = this.props.band;
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        maxWidth: '300px',
        backgroundcolor: 'blue',
      }}>
        <h2>{name}</h2>
        <p><strong>Жанр:</strong> {genre}</p>
        <p><strong>Год создания:</strong> {yearFormed}</p>
        <p>{description}</p>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Мои любимые музыкальные группы</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundcolor: 'blue' }}>
          {bands.map(band => (
            <BandCard key={band.id} band={band} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;