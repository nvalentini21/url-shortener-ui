import React, { useState, useEffect } from 'react'
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';



const App = () => {
  const [urls, setUrls] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(error => setError(error.message))
  }, [])

  return (
    <main className="App">
      {error ? <div>Whoops, the server is down. Please refresh to try again.</div> :
      <div>
        <header>
          <h1>URL Shortener</h1>
          <UrlForm setUrls={setUrls} urls={urls} />
        </header>
        <UrlContainer urls={urls}/>
      </div>
    }
    </main>
  )
}

export default App;
