import React from "react";
import { Container } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";

import AccordionItem from "./AccordionItem";
// import PersonalInfo from "./PersonalInfo";
// import FamilyInfo from "./FamilyInfo";
import AppForm from "./AppForm";
import AcademicInfo from "./AcademicInfo";

import AddForm from "./addForm";

// class newSect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { first: "", sec: "" };
//   }

//   render() {
//     const state = this.state;
//     return (
//       <>
//         <b>Ahsan</b>
//         <Form.Group widths="equal">
//           <Form.Input
//             label="First Name"
//             placeholder="First Name"
//             name="first"
//             value={state.first}
//             className="required"
//             // error={state.first.error}
//             setvalue=""
//           />

//           <Form.Input
//             label="First Name"
//             placeholder="First Name"
//             name="first"
//             value={state.sec}
//             className="required"
//             // error={state.first.error}
//             setvalue=""
//           />
//         </Form.Group>
//       </>
//     );
//   }
// }

const items = [
  {
    title: "Add new Section",
    children: <AppForm children={<AddForm />} title="Add new Section" />,
  },
];

export default class AddFrom extends React.Component {
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
