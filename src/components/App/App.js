// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';



const App = () => {
  const [urls, setUrls] = useState([])

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={urls}/>
    </main>
  )
}



// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       urls: []
//     }
//   }
//
//   componentDidMount() {
//     postUrl()
//   }
//
  // render() {
  //   return (
  //     <main className="App">
  //       <header>
  //         <h1>URL Shortener</h1>
  //         <UrlForm />
  //       </header>
  //
  //       <UrlContainer urls={this.state.urls}/>
  //     </main>
  //   );
  // }
// }

export default App;


//this is my second test commit to see if my push to main is working on my forked copy.
