import React from "react";
import { Accordion } from "semantic-ui-react";

import AccordionItem from "./AccordionItem";
import PersonalInfo from "./PersonalInfo";
import FamilyInfo from "./FamilyInfo";
import AppForm from "./AppForm";
import AcademicInfo from "./AcademicInfo";

const items = [
    {
        title: "Personal Information",
        children: <AppForm children={<PersonalInfo />} />,
    },
    { title: "Family Information",
    children: <AppForm children={<FamilyInfo />} />,
},

    { title: "Academic Information", 
    children: <AppForm children={<AcademicInfo />} />,
},
  
];

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
