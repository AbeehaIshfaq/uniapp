import React from "react";
import { Card, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import server from "../../../server/server";

import UniGridCompact from "../unigrid/UniGridCompact";
import NoUni from "../unigrid/NoUni";

class UnilistCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageNo: 1, loading: false, totalPages: 0, uniList: [] };
        this.limit = 5;
        this.ref = React.createRef();
    }

    async componentDidMount() {
        const skip = 0;
        try {
            const { data } = await server.get(
                `/student/myUnis?limit=${this.limit}&skip=${skip}`
            );
            this.setState({ ...data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { uniList } = this.state;

        return (
            <Card fluid>
                <Card.Content>
                    <Header as="h1">My Universities</Header>
                </Card.Content>

                <Card.Content>
                    {uniList.length > 0 ? (
                        <UniGridCompact unis={uniList} ref={this.ref} />
                    ) : (
                        <NoUni
                            header="No Universities Selected"
                            content="You do not have any universities selected at the moment. Click
                            the button below to select a university"
                            button="Find Universities"
                            redirect="/student/findUnis"
                        />
                    )}
                </Card.Content>

                <Card.Content>
                    <Button as={Link} primary to="myUnis" animated>
                        <Button.Content visible>View More</Button.Content>
                        <Button.Content hidden>
                            <Icon name="right arrow" />
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

export default UnilistCard;
