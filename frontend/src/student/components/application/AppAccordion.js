import React from "react";
import { Accordion } from "semantic-ui-react";

import AccordionItem from "./AccordionItem";

const items = [
    { title: "Personal Information", children: "Some placeholder text" },
    { title: "Family Information", children: "Some placeholder text" },
    { title: "Academic Information", children: "Some placeholder text" },
    { title: "Extracurricular Information", children: "Some placeholder text" },
];

export default class AppAccordion extends React.Component {
    state = { activeIndex: 0 };

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
                    key={title}
                    title={title}
                    children={children}
                    index={index}
                    active={activeIndex === index}
                    onClick={this.clickHandler}
                />
            );
        });

        return <Accordion styled fluid panels={renderedItems} />;
    }
}
