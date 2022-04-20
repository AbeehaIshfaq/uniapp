import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../components/navbar/Navbar";

const Viewuni = (props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <h1> </h1>
                <Container align="center" style={{ margin: "2.5rem" }}>
                    <h1> University Name </h1>

                    <div align="center" className="ui steps">
                        <div className="step">
                            <i className="clock outline icon"></i>
                            <div className="content">
                                <div className="title">Duration</div>
                                <div className="description">4 years</div>
                            </div>
                        </div>
                        <div className=" step">
                            <i className="dollar icon"></i>
                            <div className="content">
                                <div className="title">Fee</div>
                                <div className="description">800000 /year</div>
                            </div>
                        </div>
                        <div className=" step">
                            <i className="globe icon"></i>
                            <div className="content">
                                <div className="title">Location</div>
                                <div className="description">Lahore</div>
                            </div>
                        </div>
                        <div className=" step">
                            <i className="calendar alternate outline icon"></i>
                            <div className="content">
                                <div className="title">Deadline</div>
                                <div className="description">4th October</div>
                            </div>
                        </div>
                    </div>
                    <h3>
                        {" "}
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam,{" "}
                    </h3>
                    <h2> Programes Offered </h2>

                    <div className="ui list">
                        <div className="item">
                            <div className="header">Computer Science</div>
                        </div>
                        <div className="item">
                            <div className="header">Maths</div>
                        </div>
                        <div className="item">
                            <div className="header"> Physics</div>
                        </div>
                        <div className="item">
                            <div className="header">Biology</div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default Viewuni;
