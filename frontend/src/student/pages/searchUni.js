import React from "react";
import { Container, Pagination, Icon, Segment } from "semantic-ui-react";
// import { useState } from "react";

import server from "../../server/server";

import Navbar from "../components/navbar/Navbar";
import UniGrid from "../components/unigrid/findUniGrid";
import NoUni from "../components/unigrid/findUniEmpty";

export default class findUnis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      loading: false,
      totalPages: 0,
      uniList: [],
      inp: "",

      // vars for Filters
      location: "",
      feeMin: "",
      feeMax: "",
      ranking: "",
      programme: "",
    };
    this.limit = 12;
    this.ref = React.createRef();

    // this.temp = 0;

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
        `/student/uniList?limit=${this.limit}&skip=${skip}&inp=${
          this.inp
        }&nums=${0}`
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
        `/student/uniList?limit=${this.limit}&skip=${skip}&input=${
          this.state.inp
        }&nums=${0}`
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
    // this.setState({ temp: 1 });
    // this.forceUpdate();
  };

  filterSubmitHandler = async () => {
    const skip = 0;
    let send_arr = {
      loc: this.state.location,
      rank: this.state.ranking,
      prog: this.state.programme,
      feemin: this.state.feeMin,
      feemax: this.state.feeMax,
    };
    try {
      const { data } = await server.get(
        `/student/uniList?limit=${
          this.limit
        }&skip=${skip}&input=${send_arr}&nums=${1}`
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
              style={{
                border: "none",
                color: "white",
                textAlign: "center",
                backgroundColor: "#008CBA",
                borderRadius: "20px",
                width: "70px",
                height: "25px",
                top: "10px",
                position: "relative",
                left: "10px",
              }}
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

        <div
          style={{
            textAlign: "center",
            position: "relative",
            top: "30px",
            left: "100px",
          }}
        >
          <form id="filters">
            <b
              style={{ fontSize: "large", position: "absolute", left: "600px" }}
            >
              Filters
            </b>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: "40px",
                left: "300px",
              }}
            >
              <b>Location</b>
              <input
                value={this.state.location}
                onChange={(event) =>
                  this.setState({ location: event.target.value })
                }
                type="text"
                placeholder="Add Location"
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "88px",
                  border: "1px solid",
                  borderRadius: "20px",
                  width: "120px",
                  height: "25px",
                }}
              ></input>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: "40px",
                left: "700px",
              }}
            >
              <b>Ranking</b>
              <input
                value={this.state.ranking}
                onChange={(event) =>
                  this.setState({ ranking: event.target.value })
                }
                type="text"
                placeholder="Add Ranking"
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "25px",
                  border: "1px solid",
                  borderRadius: "20px",
                  width: "120px",
                  height: "25px",
                }}
              ></input>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: "80px",
                left: "300px",
              }}
            >
              <b>Programmes Offered</b>
              <input
                value={this.state.programme}
                onChange={(event) =>
                  this.setState({ programme: event.target.value })
                }
                type="text"
                placeholder="Enter Programme"
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "10px",
                  border: "1px solid",
                  borderRadius: "20px",
                  width: "150px",
                  height: "25px",
                }}
              ></input>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: "80px",
                left: "700px",
              }}
            >
              <b>Fee Range</b>
              <input
                value={this.state.feeMin}
                onChange={(event) =>
                  this.setState({ feeMin: event.target.value })
                }
                type="text"
                placeholder="0"
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "10px",
                  border: "1px solid",
                  borderRadius: "20px",
                  width: "120px",
                  height: "25px",
                }}
              ></input>
              <b
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "20px",
                  border: "none",
                  fontSize: "large",
                }}
              >
                -
              </b>
              <input
                value={this.state.feeMax}
                onChange={(event) =>
                  this.setState({ feeMax: event.target.value })
                }
                type="text"
                placeholder="Max fee range"
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "30px",
                  border: "1px solid",
                  borderRadius: "20px",
                  width: "120px",
                  height: "25px",
                }}
              ></input>
              <b
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "0px",
                  left: "40px",
                  border: "none",
                  fontSize: "medium",
                }}
              >
                USD
              </b>
            </div>

            <div>
              <b
                style={{
                  textAlign: "center",
                  position: "absolute",
                  top: "133px",
                  left: "480px",
                  font: "medium",
                }}
              >
                Deadline
              </b>
              <div>
                <label for="month"></label>
                <select
                  name="month"
                  id="month"
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "130px",
                    left: "550px",

                    border: "1px solid",
                    borderRadius: "20px",
                    width: "112px",
                    height: "25px",
                  }}
                >
                  <option value="Select" selected>
                    Select month
                  </option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
              </div>

              <div
                style={{
                  textAlign: "center",
                  position: "absolute",
                  top: "80px",
                  left: "80px",
                }}
              >
                <label for="year"></label>
                <select
                  name="year"
                  id="year"
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "50px",
                    left: "600px",

                    border: "1px solid",
                    borderRadius: "20px",
                    width: "105px",
                    height: "25px",
                  }}
                >
                  <option value="Select" selected>
                    Select year
                  </option>
                  <option value="2018">Jan</option>
                  <option value="2019">Feb</option>
                  <option value="2021">Mar</option>
                  <option value="2022">Apr</option>
                  <option value="2023">May</option>
                  <option value="2024">Jun</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                this.filterSubmitHandler();
                // forceUpdate;
              }}
              style={{
                border: "none",
                color: "white",
                textAlign: "center",
                backgroundColor: "#008CBA",
                borderRadius: "10px",
                width: "110px",
                height: "30px",
                top: "175px",
                position: "absolute",
                left: "570px",
              }}
            >
              <b>Apply Filters</b>
            </button>
          </form>
        </div>

        {/* <MainUniGrid states={this.state} refs={this.ref} /> */}

        <Container
          style={{ padding: "20px", position: "relative", top: "280px" }}
        >
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
