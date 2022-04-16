import React from "react";
import { Card, Segment } from "semantic-ui-react";

import UniCardCompact from "./UniCardCompact";

export default class UniGrid extends React.Component {
    state = { uniList: this.props.unis, loading: false };

    render() {
        const { uniList: unis } = this.state;
        return (
            <Segment basic textAlign="left">
                <Card.Group stackable>
                    {unis.map((uni) => {
                        return (
                            <React.Fragment key={uni._id}>
                                <UniCardCompact
                                    uni={uni}
                                    remove={this.removeUni}
                                    add={this.addUni}
                                />
                            </React.Fragment>
                        );
                    })}
                </Card.Group>
            </Segment>
        );
    }
}
