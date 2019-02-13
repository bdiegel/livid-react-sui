import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ShowItem from './ShowItem';

class ShowList extends Component {

  render() {
    const shows = this.props.shows;

    const cards = shows.map((show, index) => 
      <ShowItem show={show} key={index} />
    );

    return (
      <Card.Group itemsPerRow='2' >
        {cards.map((show) => show)}
      </Card.Group>
    )
  }
}

export default ShowList;
