import React, { useState } from 'react';

function MovieAdd() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setOverview] = useState('');
  const [url, setUrl] = useState('');
  const [rate, setRate] = useState(0);

  const addCard = () => {
    const newCard = {
      title: title,
      image: image,
      description: description,
      url: url,
      rate: rate
    };
    setCards([...cards, newCard]);
    setTitle('');
    setImage('');
    setOverview('');
    setUrl('');
    setRate(0);
  };

  return (
    <div >
      <div className='container'>
      <h3>Add new Movie</h3>
      <form className='form-container' onSubmit={(e) => {e.preventDefault(); addCard();}}>
        <div > 
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        </div>
        <div >
        <label>
          Overview:
          <textarea value={description} onChange={(e) => setOverview(e.target.value)} />
        </label>
        </div>
        <div >
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        </div> 
        <div >
        <label>
          Rating:
          <input step="0.1" min="0" max="10" type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />
        </label>
        </div> 
        <button type="submit">Add NewMovie</button>
      </form>
      </div> 

      {cards.map((card, index) => (
        <div key={index}>
          <div className="movie">
          <img src={card.image} alt={card.title} />
          <div className="movie-details">
           <div className="box">
              <h2 className="title">{card.title}</h2>
              <p className="rating">{card.rate}</p>
          </div>
              <div className="overview">
                  <h1>Overview</h1>
                  {card.description}
              </div>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default MovieAdd;
