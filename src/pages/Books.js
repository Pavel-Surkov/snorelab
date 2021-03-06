//import React, { Component } from 'react';
const { createElement, render, Component } = wp.element;
import axios from 'axios';

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount() {
    axios.get('https://snorelab.ux-mind.pro/wp-json/wp/v2/books')
      .then(res => this.setState({
        books: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>

      </div>
    )
  }
}

export default Books;
