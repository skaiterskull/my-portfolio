import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactMeForm.css";
export const ContactMeFrom = () => {
  const [state, handleSubmit] = useForm("mleavldz");
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    const hideElement = () => {
      if (state.succeeded) {
        setOpacity(0);
      }
    };
    setTimeout(hideElement, 3000);
  }, [state.succeeded]);

  return (
    <div className="contactme-wrapper">
      <div className="contactme-top">
        <h1 style={{ fontWeight: "bolder" }}>Contact Me</h1>
        <h4>Thank you for visiting my portfolio.</h4>
        <p>
          If you have any questions, please feel free to drop me a message by
          filling the form below. I am more than happy to answer your queries
          because I love learning so much. I will get back to you as soon as
          posibble after I receive your message. Cheers !!!
        </p>
      </div>
      <div className="contactme bottom">
        {state.submitting && (
          <div className="spinner">
            <Spinner animation="border"></Spinner>
          </div>
        )}
        {state.succeeded && (
          <div className="contactme-alert" style={{ opacity }}>
            <Alert className="text-center">Message has been sent.</Alert>
          </div>
        )}

        <Form className="" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <ValidationError
              className="mt-2"
              style={{ color: "red" }}
              field="email"
              prefix="Email"
              errors={state.errors}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              required
              name="message"
              rows={10}
              placeholder="Your message here"
            />
          </Form.Group>
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
