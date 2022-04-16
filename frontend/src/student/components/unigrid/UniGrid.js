import React from "react";
import { Card, Modal, Button } from "semantic-ui-react";

import UniCard from "./UniCard";

import server from "../../../server/server";

export default class UniGrid extends React.Component {
    state = { uniList: this.props.unis, loading: false, modal: null };

    removeUni = async (uniId) => {
        this.setState({ loading: true });
        try {
            await server.post("/student/removeUni", { uniId });

            this.setState({
                modal: "University Removed Successfully",
                laoding: false,
            });
        } catch (err) {
            console.log(err);
        }
    };

    addUni = async (uniId) => {
        this.setState({ loading: true });
        try {
            await server.post("/student/addUni", { uniId });

            this.setState({
                modal: "University Added Successfully",
                loading: false,
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { uniList: unis, modal } = this.state;
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
                <Modal size="small" open={!!modal}>
                    <Modal.Header style={{ textAlign: "center" }}>
                        <h3>{modal}</h3>
                        <Button
                            onClick={() => {
                                this.setState({ modal: null });
                                this.props.reload();
                            }}
                        >
                            Ok
                        </Button>
                    </Modal.Header>
                </Modal>
            </>
        );
    }
}
