import React, { Component } from 'react';

import {
    Card,
    Icon,
    Label,
    List
} from 'semantic-ui-react';

const ShowDescription = props => {
    const episodes = props.episodes;
    const description = episodes.slice(0, 3).map( (episode, index) => {
    return (
        <List.Item key={index} onClick={(e) => props.onItemClick(episode, e)}>
            <List.Icon name='play' size='small' verticalAlign='middle'/>
            <List.Content>{episode.title}</List.Content>
        </List.Item>
    )});

    return <List>{description}</List>;
}

class ShowItem extends Component {

    onItemClick = (episode, event) => {
        event.stopPropagation();
        console.log("Playing: " + episode.title);
        alert("Playing: " + episode.title);
    }

    onCardClick = (show) => {
        console.log("Open: " + show.title);
        alert("Open: " + show.title);
    }

    render() {
        const show = this.props.show;
        const episodesCount = show.episodes.length;
        const dateMostRecent = show.episodes[0].date;

        return (
            <Card onClick={(e) => this.onCardClick(show, e)}>
                <Card.Content>
                    <Card.Header>{show.title}</Card.Header>
                    <Card.Description>
                        <ShowDescription 
                            episodes ={show.episodes} 
                            onItemClick={this.onItemClick}/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Label color='yellow' image>
                        <Icon name='file video' />
                        {episodesCount} 
                        <Label.Detail>episodes</Label.Detail>
                    </Label>

                    {/* conditionally include 'new' tag element */}
                    {episodesCount % 2 !== 1 &&
                        <Label color='blue'>new</Label>
                    }

                    <span className='date' style={{float: 'right', position: 'relative', top: '50%', transform: 'translateY(50%)'}}>{dateMostRecent}</span>

                </Card.Content>
            </Card>
        )
    }
}

export default ShowItem;
