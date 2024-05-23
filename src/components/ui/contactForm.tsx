"use client";

import React, { useState } from "react";

import { toast } from "react-hot-toast";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import CustomInput from "../input/customInput";

const ContactMeForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <Formik
      initialValues={{
        name: "",
        emailAddress: "",
        message: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setLoading(true);

        emailjs
          .send(
            "service_ub0ai7m",
            "template_uitkb3n",
            values,
            "gRb2MVaDpo-wmrhbD"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              toast.success(
                "Your message has been successfully sent. I will get back to you shortly!"
              );
              resetForm();
            },
            function (error) {
              console.log("FAILED...", error);
              toast.error("Could not send your message. Please try again.");
            }
          );

        setSubmitting(false);
        setLoading(false);
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Your name is required"),
        emailAddress: Yup.string()
          .email("Invalid email address")
          .required("Please enter your email address"),
        message: Yup.string()
          .min(10, "Message must be at least 10 characters long")
          .required("Please enter your message"),
      })}
    >
      <Form className="flex flex-col gap-y-6 w-full md:max-w-[75%] xl:max-w-[50%] mx-auto pb-10">
        <h1 className="text-4xl font-medium text-center leading-relaxed">
          Thanks for your interest in my services. How can I help you today?
        </h1>
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 gap-x-6">
          <CustomInput
            name="name"
            type="text"
            id="name"
            required
            label="Your Name"
            autoComplete="off"
            disabled={loading}
          />
          <CustomInput
            name="emailAddress"
            type="text"
            id="emailAddress"
            required
            label="Email Address"
            autoComplete="off"
            disabled={loading}
          />
        </div>
        <CustomInput
          as="textarea"
          name="message"
          id="message"
          required
          label="Please enter your message here..."
          autoComplete="off"
          disabled={loading}
          rows={4}
        />
        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-brand-200 rounded-full px-4 py-2 text-brand-200 hover:bg-brand-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
          >
            Send Message
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default ContactMeForm;
