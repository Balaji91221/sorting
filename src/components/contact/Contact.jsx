// ContactForm.jsx
import React from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import Font Awesome icons
import "./ContactForm.css";

export default function ContactForm() {
  const [isValidated, setIsValidated] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsValidated(true);

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return;
    }

    setIsProcessing(true);

    // Simulate data submission (replace this with your actual logic)
    setTimeout(() => {
      setIsProcessing(false);
      setIsValidated(false);
      form.reset();
      setSuccess(true);
    }, 1000);
  }

  return (
    <>
      <div>
        <h2>Contact Us</h2>
        <div className="underline"></div>
      </div>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Your name" />
          <Form.Control.Feedback type="invalid">
            <h5>Name must be at least one character.</h5>
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="someone@something.com"
          />
          <Form.Control.Feedback type="invalid">
            <h5>Please enter a valid email.</h5>
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" placeholder="Your message..." />
          <Form.Control.Feedback type="invalid">
            <h5>Please provide a valid message.</h5>
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          size="lg"
          variant="primary"
          type="submit"
          disabled={isProcessing}
          className="my-3"
        >
          Submit{" "}
          {isProcessing && (
            <Spinner animation="border" variant="light" size="sm" />
          )}
        </Button>
      </Form>

      <div className="contact-info">
        <p>
          <FaPhone /> Phone: 9398806613
        </p>
        <p>
          <FaEnvelope /> Email: kbalaji15j@example.com
        </p>
        <p>
          <FaLinkedin /> LinkedIn: Kelavath Balaji Naik
        </p>
      </div>

      <Form.Group className="mx-auto text-center form-group mt-4">
        <Alert
          show={success}
          variant="success"
          onClose={() => setSuccess(false)}
          dismissible
        >
          <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
        </Alert>
      </Form.Group>
    </>
  );
}
