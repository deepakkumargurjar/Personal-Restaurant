import React from 'react';
import data from '../restApi.json';

const Qualities = () => {
  const qualities = data.data.ourQualities;

  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {qualities.map((element) => (
          <div className="card" key={element.id}>
            <img src={element.image} alt={element.title} />
            <p className="title">{element.title}</p>
            <p className="description">{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
