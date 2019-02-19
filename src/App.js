import React, { Component } from 'react';
import './App.css';
import ShowList from './shows/ShowList';
// import { getShowData } from './sdk/Data';
import API from './sdk/LividApi';
import {
  Header, Container,
} from 'semantic-ui-react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      shows: []
    }
  }

  loadData() {
      this.setState({ isLoading: true });
      API.getShows()
        .then(shows => this.setState({ 
          shows: shows, 
          isLoading: false,
          error: null
        }))
        .catch(error => this.setState({ 
          error: 'failed to load data', 
          isLoading: false 
        }));
  }


  componentDidMount() {
    this.loadData();
  }

  render() {
    // load static data:
    //const shows = getShowData();

    const { shows, isLoading, error } = this.state;

    // TODO: should handle error case
    if (isLoading) {
      return <div>Loading...</div>
    }
    else if (error != null) {
      return <div>{this.state.error}</div>
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
