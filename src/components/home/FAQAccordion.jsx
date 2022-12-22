import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const FAQAccordion = ({ eventKey, accordionQuestion, accordionAnswer }) => {

    return (

        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header className="accordion-header">{accordionQuestion}</Accordion.Header>
                <Accordion.Body>
                    {accordionAnswer}
                </Accordion.Body>
            </Accordion.Item>
        </>

    );

};

export default FAQAccordion;