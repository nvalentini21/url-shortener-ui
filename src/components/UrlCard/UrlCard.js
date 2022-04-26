import React from 'react';
import './UrlCard.css';

const UrlCard = ({id, long_url, short_url, title}) => {

  return (
    <div className="url-card">
      <h3 className='url-title'>{title}</h3>
      <p classname='short-url-title'>Short Url:</p>
      <a className='short-url' href={short_url} target="blank">{short_url}</a>
      <p className='long-url'>Long Url: {long_url}</p>
    </div>
  )
}

export default UrlCard
