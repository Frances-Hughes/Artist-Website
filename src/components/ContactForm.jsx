// ContactForm.jsx

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform form validation here before submitting
    // For simplicity, let's assume the form is valid

    // Send the form data to the specified email address
    const { name, email, message } = formData;
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Assuming you have a function to send an email, you can use a service like Email.js or your server to handle this
    sendEmail(
      "franceslhughes@hotmail.com",
      "Contact Form Submission",
      emailBody
    );

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Form submitted successfully!");
  };

  const sendEmail = (to, subject, body) => {
    // Implement your logic to send an email here
    // You may use a service like Email.js, or connect to your server to send the email
    // Example: axios.post('/api/send-email', { to, subject, body });
    console.log(`Email sent to ${to} with subject: ${subject}\nBody: ${body}`);
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
