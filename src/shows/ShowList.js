import React, { Component } from 'react';

import {
  Card,
  Header,
  Container,
} from 'semantic-ui-react';
import ShowItem from './ShowItem';

class ShowList extends Component {


  render() {
    var shows = this.props.shows;

    const listItems = shows.map((show) =>

      <Card key={show.title} fluid>
        <Card.Content>
          <Card.Header textAlign='left'>{show.title}</Card.Header>
        </Card.Content>
      </Card>
    );

    return (
      <div>
        <Header as="h1" textAlign="center">
          LiVid
        </Header>

        <Container>        
        <Card.Group itemsPerRow='3' >
         {listItems.map((show) => show)}
        </Card.Group>
        </Container>


      </div>
    )
  }
}

export default ShowList;
