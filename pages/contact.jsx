import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@statickit/react";
import { Modal, Label, Header, Form, Input, Button } from "semantic-ui-react";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const reCaptchaRef = useRef(null);
  useEffect(() => {
    try {
      loadReCaptcha(process.env.NEXT_PUBLIC_WEBSITE_KEY, () =>
        setRecaptchaReady(true)
      );
    } catch (e) {
      console.error(e);
    }
  }, []);
  if (state.succeeded) {
    return (
      <p>Thanks for the message, I'll get back to you as soon as possible.</p>
    );
  }
  // const verifyCallback = (recaptchaToken) => {
  //   // Here you will get the final recaptchaToken!!!
  //   console.log(recaptchaToken, "<= your recaptcha token");
  // };

  // const updateToken = () => {
  //   // you will get a new token in verifyCallback
  //   this.recaptcha.execute();
  // };
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

          <textarea id="message" name="message" />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <ReCaptcha
            ref={reCaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_WEBSITE_KEY}
            action="sendEmail"
            verifyCallback={() => {
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
