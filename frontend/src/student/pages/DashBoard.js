import React from "react";
import { Container, Card } from "semantic-ui-react";
import server from "../../server/server";

import NavBar from "../components/navbar/Navbar";
import UpdateProgress from "../components/application/Updateprogress";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
import UniListCard from "../components/dashboard/UnilistCard";
import Calend from "../components/calendar/calend";
import moment from "moment";

class StudentDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dead: []
    
        };
    }
    updatedeadline = async () => {
        const skip = 0;
        try {
            const { data } = await server.get(
                `/student/myUnis`
            );
            this.setState({ ...data });
            let uni=data.uniList;
            let a;
           // console.log(a,"a");
            let deadline=[];
            for (let i=0;i<uni.length;i++)
            {
                a= moment(uni[i].deadline).format("MMMM Do YYYY");

            //    this.setState({ dead: deadline.push(a) });
              //  console.log(this.state.dead,"fff");
                deadline[i]=a;
            }
           // console.log(this.dead,"jhhvghvgdead");
           // this.setstate({dead: deadline});
          //  console.log(this.dead,"jhhvghvgad");
            this.setState( state => ({
                dead: state.dead.concat(deadline)
            }));
           // console.log(this.dead,"jhhvghvgad");



        } catch (err) {
            console.log(err);
        }
    }
    componentDidMount() {
        this.updatedeadline();
      //console.log(this.dead,"dead");

    }
    render() {
       //console.log(this.state.dead,"gtfg");

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Container style={{ margin: "2.5rem" }}>
                    <Card.Group itemsPerRow={2} stackable>
                        <UpdateProgress />
                        <Calend name={this.state.dead}/>
                    </Card.Group>
                </Container>
                <Container align="center" style={{ margin: "2.5rem" }}>
                    <UniListCard />
                </Container>
            </main>
            </div>

    );
};
}
export default StudentDash;
