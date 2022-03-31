import React from "react";

import NavBar from "../components/navbar/Navbar";
import ProgressCard from "../components/dashboard/ProgressCard";
// import DeadlineCard from "../components/dashboard/DeadlineCard";
// import UniListCard from "../components/dashboard/UnilistCard";

const StudentDash = ({ props }) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="ui container" style={{ marginTop: "1em" }}>
                    <ProgressCard />
                    {/* <DeadlineCard /> */}
                    {/* <UniListCard /> */}
                </div>
            </main>
        </>
    );
};

export default StudentDash;
