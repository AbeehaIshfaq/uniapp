import React from "react";
import { Container, Pagination, Icon, Segment } from "semantic-ui-react";
// import { useState } from "react";

import server from "../../server/server";

import Navbar from "../components/navbar/Navbar";
import UniGrid from "../components/unigrid/findUniGrid";
import NoUni from "../components/unigrid/findUniEmpty";

// let tempList = [];

function MainUniGrid(props) {
  const { pageNo, totalPages, uniList, endList } = props.states;
  return (
    <Container style={{ padding: "20px" }}>
      <Segment raised>
        {uniList.length > 0 ? (
          <UniGrid unis={uniList} ref={props.refs} />
        ) : (
          <NoUni />
        )}
      </Segment>
      {totalPages > 1 && (
        <Container textAlign="center">
          <Pagination
            onPageChange={this.paginationHandler}
            activePage={pageNo}
            totalPages={totalPages}
            size="small"
            siblingRange={1}
            boundaryRange={0}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true,
            }}
            prevItem={{
              content: <Icon name="angle left" />,
              icon: true,
            }}
            nextItem={{
              content: <Icon name="angle right" />,
              icon: true,
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true,
            }}
          />
        </Container>
      )}
    </Container>
  );
}

export default class findUnis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      loading: false,
      totalPages: 0,
      uniList: [],
      inp: "",
    };
    this.limit = 12;
    this.ref = React.createRef();

    this.temp = 0;

    this.Submithandler = this.Submithandler.bind(this);
  }

  async componentDidMount() {
    const skip = 0;
    try {
      const { data } = await server.get(
        `/student/uniList?limit=${this.limit}&skip=${skip}&input=${this.inp}`
      );
      this.setState({ ...data });
    } catch (err) {
      console.log(err);
    }
  }

  paginationHandler = async (e, { activePage }) => {
    const skip = activePage - 1;
    try {
      const { data } = await server.get(
        `/student/uniList?limit=${this.limit}&skip=${skip}&inp=${this.inp}`
      );
      this.setState({ uniList: data.uniList, pageNo: activePage });
      this.ref.current.setState({ uniList: data.uniList });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  Submithandler = async () => {
    // event.preventDefault();
    const skip = 0;
    try {
      const { data } = await server.get(
        `/student/uniList?limit=${this.limit}&skip=${skip}&input=${this.state.inp}`
      );
      // this.setState({ ...data });
      this.setState(
        {
          totalPages: data.totalPages,
          uniList: data.uniList,
          inp: this.state.inp,
        },
        () => this.render()
      );
    } catch (err) {
      console.log(err);
    }
    // this.render();
    this.setState({ temp: 1 });
    // this.forceUpdate();
  };

  render() {
    const { pageNo, totalPages, uniList } = this.state;

    return (
      <div>
        <header>
          <Navbar />
        </header>

        <Container style={{ textAlign: "center" }}>
          <form>
            <input
              style={{
                // padding: "5px",
                top: "10px",
                position: "relative",
                textAlign: "center",
                width: "400px",
                border: "2px solid",
                padding: "5px 5px 5px 25px",
                // left: "100px",
                borderRadius: "20px",
              }}
              value={this.state.inp}
              placeholder="Enter university name to search"
              onChange={(event) => {
                this.setState({ inp: event.target.value });
              }}
              // onChange={this.Submithandler}
              id="input-form"
            />

            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                this.Submithandler();
                // forceUpdate;
              }}
            >
              Search
            </button>
          </form>
        </Container>

        {/* <MainUniGrid states={this.state} refs={this.ref} /> */}

        <Container style={{ padding: "20px" }}>
          <Segment raised>
            {uniList.length > 0 ? (
              <UniGrid unis={uniList} ref={this.ref} />
            ) : (
              <NoUni />
            )}
          </Segment>
          {totalPages > 1 && (
            <Container textAlign="center">
              <Pagination
                onPageChange={this.paginationHandler}
                activePage={pageNo}
                totalPages={totalPages}
                size="small"
                siblingRange={1}
                boundaryRange={0}
                firstItem={{
                  content: <Icon name="angle double left" />,
                  icon: true,
                }}
                prevItem={{
                  content: <Icon name="angle left" />,
                  icon: true,
                }}
                nextItem={{
                  content: <Icon name="angle right" />,
                  icon: true,
                }}
                lastItem={{
                  content: <Icon name="angle double right" />,
                  icon: true,
                }}
              />
            </Container>
          )}
        </Container>
      </div>
    );
  }
}
