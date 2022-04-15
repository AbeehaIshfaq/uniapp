import React from "react";
import { Card } from "semantic-ui-react";

import UniCard from "./findUniCard";

export default class UniGrid extends React.Component {
    state = { uniList: this.props.unis, loading: false };

    removeUni = (uniId) => {
        // ! Implement this into the backend as well
        const newUnis = [...this.state.uniList].filter(
            ({ _id }) => _id !== uniId
        );
        this.setState({ unis: newUnis });
    };

    addUni = (uniId) => {
        console.log(uniId);
    };

    render() {
        const { uniList: unis } = this.state;
        return (
            <>
                <Card.Group centered doubling stackable>
                    {unis.map((uni) => {
                        return (
                            <React.Fragment key={uni._id}>
                                <UniCard
                                    uni={uni}
                                    remove={this.removeUni}
                                    add={this.addUni}
                                />
                            </React.Fragment>
                        );
                    })}
                </Card.Group>
            </>
        );
    }
}
