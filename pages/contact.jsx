import React, { useState } from "react";
import { useForm, ValidationError } from "@statickit/react";
import { Modal, Label, Header, Form, Input, Button } from "semantic-ui-react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  if (state.succeeded) {
    return (
      <p>Thanks for the message, I'll get back to you as soon as possible.</p>
    );
  }

  return (
    <Modal trigger={<Button>Contact</Button>} basic size="small">
      <Header icon="mail" content="Message Me" />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address </label>
          <br />
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <br />
          <br />
          <label> Message</label>
          <br />
          <Form>
            <textarea id="message" name="message" />
          </Form>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_WEBSITE_KEY}
            onChange={() => {
              setCaptchaSuccess(true);
            }}
          />

          <br />
          {captchaSuccess && (
            <Button type="submit" disabled={state.submitting}>
              Submit
            </Button>
          )}
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default ContactForm;
