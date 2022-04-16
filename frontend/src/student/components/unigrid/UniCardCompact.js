import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UniCard extends React.Component {
    state = { loading: false };

    clickHandler = async (e) => {
        this.setState({ loading: true });
        if (this.props.uni.isAdded) {
            await this.props.remove(this.props.uni._id);
        } else {
            await this.props.add(this.props.uni._id);
        }
        this.setState({ loading: false });
    };

    render() {
        const { uni } = this.props;
        let { name, email, deadline, phoneNumber } = uni;

        const description = `Contact Information: \n ${email}, ${phoneNumber}`;

        let date = new Date(deadline);
        deadline = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

        return (
            <>
                <Card
                    as={Link}
                    to={`/viewUniversity/${uni._id}`}
                    fluid
                    header={name}
                    meta={`Deadline: ${deadline}`}
                    description={description}
                />
            </>
        );
    }
}

export default UniCard;
