import React, { Component } from 'react';

import {
    Card,
    Icon,
    Label
} from 'semantic-ui-react';

class ShowItem extends Component {
    
    render() {
        const show = this.props.show;
        const episodesCount = show.episodes.length;
        const dateMostRecent = show.episodes[0].date;

        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                    {/* {episodesCount % 2 !== 1 &&
                        <Label color='blue' ribbon='right'>new</Label>
                    } */}
                    {show.title}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>{dateMostRecent}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Label color='yellow' as='a' image>
                        <Icon name='file video' />
                        {episodesCount} 
                        <Label.Detail>episodes</Label.Detail>
                    </Label>

                    {/* <Icon name='file video' /> */}
                    {/* <span>{episodesCount} episodes</span> */}

                    {/* conditionally include 'new' tag element */}
                    {episodesCount % 2 !== 1 &&
                        <Label attached='bottom right' color='blue' tag>new</Label>
                    }

                </Card.Content>
            </Card>
        )
    }
}

export default ShowItem;
