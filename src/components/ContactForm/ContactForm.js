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
          type="text"
          placeholder={t("contact_placeholder1")}
          required
          name="name"
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder={t("contact_placeholder2")}
          required
          name="name"
        />
      </div>
      <div className="mt-4">
        <Input
          type="email"
          placeholder={t("contact_placeholder3")}
          required
          name="email"
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder={t("contact_placeholder4")}
          required
          name="subject"
        />
      </div>
      <div className="mt-4 ">
        <TextArea
          rows={4}
          placeholder={t("contact_placeholder5s")}
          required
          name="message"
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button arrowRight variant="primary" type="submit">
          {t("contact_button")}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
