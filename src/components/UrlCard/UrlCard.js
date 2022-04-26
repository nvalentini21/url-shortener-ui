import React from 'react';
import './UrlCard.css';

const UrlCard = ({id, long_url, short_url, title}) => {

  return (
    <div className="url-card">
      <h3>{title}</h3>
      <a href={short_url} target="blank">{short_url}</a>
      <p>Long Url: {long_url}</p>
    </div>
  )
}

export default UrlCard
