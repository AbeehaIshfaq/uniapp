import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";

import server from "../../server/server";

import UniGrid from "../components/unigrid/UniGrid";
import NoUni from "../components/unigrid/NoUni";

import UniGridCompact from "../components/unigrid/UniGridCompact";

export default class MyUnis extends React.Component {
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
        const { pageNo, totalPages, uniList } = this.state;
        return (
            <div>
                <Container style={{ padding: "20px" }}>
                    <Segment>
                        <Header as="h1">Your Universities</Header>
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
                    </Segment>
                </Container>
            </div>
        );
    }
}
