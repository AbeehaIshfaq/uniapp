import React from "react";
import { Accordion } from "semantic-ui-react";

import AccordionItem from "./AccordionItem";
import PersonalInfo from "./PersonalInfo";
import AppForm from "./AppForm";


const FamilyComponent = () => {
    return (
        <form>
            <fieldset>
                <label>
                    <p>Father's Name</p>
                    <input name="father's name" />
                    <p>Mother's Name</p>
                    <input name="mother's name" />
                    <p>Father's CNIC</p>
                    <input name="number of siblings" />
                    <p>Mother's CNIC</p>'
                    <input name="number of siblings" />
                    <p>Number of Siblings</p>
                    <input name="number of siblings" />
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
};


const AcademicComponent = () => {
    return (
        <form>
            <fieldset>
                <label>
                    <p>Date of graduation</p>
                    <input name="Date of graduation" />
                    <p>Subject Name and Grade</p>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                    <input name="Subject" /> <input name="Grades" /> <br></br>
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
};



const ExtracurricularComponent = () => {
    return (
        <form>
            <fieldset>
                <label>
                    <p>Activity Name and Description</p>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                    <input name="Activity Name" /> <input name="Description" /> <br></br>
                </label>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    );
};





const items = [
    {
        title: "Personal Information",
        children: <AppForm children={<PersonalInfo />} />,
    },
    { title: "Family Information", children: <FamilyComponent /> },
    { title: "Academic Information", children: <AcademicComponent /> },
    { title: "Extracurricular Information", children: <ExtracurricularComponent/> },
];





// const familyInfo =
// [
// <form onSubmit={handleSubmit}>
//     <fieldset>
//         <label>
//             <p>Name</p>
//             <input name="name" />
//         </label>
//     </fieldset>
//     <button type="submit">Submit</button>
// </form>

// ]


export default class AppAccordion extends React.Component {
    state = { activeIndex: -1 };

    clickHandler = (e, props) => {
        const { index } = props;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;

        const renderedItems = items.map(({ title, children }, index) => {
            return (
                <AccordionItem
                    key={index}
                    title={title}
                    children={activeIndex === index && children}
                    index={index}
                    active={activeIndex === index}
                    onClick={this.clickHandler}
                />
            );
        });

        return <Accordion styled fluid panels={renderedItems} />;
    }
}
