import React from "react";

import { Form } from "react-bootstrap";

import { Input, TextArea, Button } from "../Core";

import { useTranslation } from "next-i18next";

const ContactForm = ({ theme = "dark", ...rest }) => {
  const { t } = useTranslation("contact");
  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="mt-4">
        <Input
          id="contact_placeholder1"
          type="text"
          placeholder={t("contact_placeholder1")}
          required
          name="name"
        />
      </div>
      <div className="mt-4">
        <Input
          id="contact_placeholder2"
          type="text"
          placeholder={t("contact_placeholder2")}
          required
          name="name"
        />
      </div>
      <div className="mt-4">
        <Input
          id="contact_placeholder3"
          type="email"
          placeholder={t("contact_placeholder3")}
          required
          name="email"
        />
      </div>
      <div className="mt-4">
        <Input
          id="contact_placeholder4"
          type="text"
          placeholder={t("contact_placeholder4")}
          required
          name="subject"
        />
      </div>
      <div className="mt-4 ">
        <TextArea
          id="contact_placeholder5"
          rows={4}
          placeholder={t("contact_placeholder5")}
          required
          name="message"
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button id="contact_button" arrowRight variant="primary" type="submit">
          {t("contact_button")}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
