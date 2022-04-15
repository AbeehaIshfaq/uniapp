import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionItem = (props) => {
    const { title, children, active, index, onClick } = props;
    return (
        <>
            <Accordion.Title active={active} index={index} onClick={onClick}>
                <Icon name="dropdown" />
                {title}
            </Accordion.Title>

            <Accordion.Content active={active}>{children}</Accordion.Content>
        </>
    );
};

export default AccordionItem;
