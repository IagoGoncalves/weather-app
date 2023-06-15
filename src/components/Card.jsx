import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
      </div>
      <div className="flex mt-4 mb-2">
        <span className="text-8xl font-bold text-slate-700">{current.temp_c}</span>
        <span className="text-2xl font-bold text-slate-700 mt-3">°C</span>
      </div>
      <div className="text-center">
        <img src={current.condition.icon} alt="weather icon" />
        <span className="text-slate-700 font-medium">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
