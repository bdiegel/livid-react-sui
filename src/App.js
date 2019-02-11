import React, { Component } from 'react';
import './App.css';
import ShowList from './shows/ShowList';
import { getShowData } from './shows/ShowApi';
import {
  Header, Container,
} from 'semantic-ui-react';


class App extends Component {

  render() {
    const shows = getShowData();
    console.log(shows);

    return (
      <div className="App">
        <Container>
          <Header size='large' textAlign="center">
            LiVid
          </Header>
          <ShowList shows={shows} />
        </Container>
      </div>
    );
  }
}

export default App;
