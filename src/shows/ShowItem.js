import React, { Component } from 'react';

import {
    Header,
    Segment,
} from 'semantic-ui-react';

class ShowItem extends Component {
    render() {
        return (
            <Segment>
                <Header as="h2" textAlign="center">
                    {this.props.show.title}
              </Header>
            </Segment>
        )
    }
}

export default ShowItem;
