import React, { Component } from 'react';
import './App.css';
import ShowList from './shows/ShowList';
import { getShowData } from './shows/ShowApi';
import {
  Header, Container,
} from 'semantic-ui-react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shows: []
    }
  }

  componentDidMount() {
    const url = 'https://api.myjson.com/bins/9x57s';
    fetch(url)
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          shows: json
        });
    })
  }

  render() {
    // load static data:
    //const shows = getShowData();

    const { shows, isLoaded } = this.state;

    // TODO: should handle error case
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className='App'>
          <Container>
            <Header size='large' textAlign='center'>
              LiVid
            </Header>
            <ShowList shows={shows} />
          </Container>
        </div>
      );
    }
  }
}

export default App;
