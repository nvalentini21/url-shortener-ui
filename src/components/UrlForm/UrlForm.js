import React, { Component } from 'react';
import { postUrl } from '../../apiCalls'

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newEntry = this.createObject();
    this.props.setUrls([...this.props.urls, newEntry])
    postUrl(newEntry)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  createObject = () => {
  const newEntry = {
      id:Date.now(),
      long_url: this.state.urlToShorten,
      short_url:`http://localhost:3001/useshorturl/${Date.now()}`,
      title: this.state.title
    }
    console.log(newEntry)
    return newEntry
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          className='url-input'
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button className='submit-btn' onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
