import React, { Component } from 'react';
import './App.css';
import ShowList from './shows/ShowList';
import { getShowData } from './shows/ShowApi';


class App extends Component {
  render() {


    const shows = getShowData();
    console.log(shows);

    return (
        <div className="App">
          <ShowList shows={shows}/>
        </div>
    );
  }
}

export default App;
