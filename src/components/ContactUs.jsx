/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleClearField() {
    setName("");
    setEmail("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pig17gi", "template_a7weldq", form.current, {
        publicKey: "KIjjn1uoZRfHsh6RM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleClearField();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main
      className="container mx-auto w-full mt-[100px] lg:mt-[150px]"
      id="contacts"
    >
      <div className="contact-header">
        <h3 className="text-center text-primary-title text-[38px]  font-bold">
          Interested in working with me?
        </h3>
        <p className="text-center text-primary-title text-[25px] my-5">
          Let's get in touch!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto  shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-primary-title text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            className="shadow appearance-none border-2 border-purple-500  text-purple-400 rounded w-full px-4 py-5   leading-tight focus:outline-none focus:shadow-outline bg-black"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-primary-title text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="shadow appearance-none border  border-purple-500 rounded w-full px-4 py-5 text-purple-400 leading-tight focus:outline-none focus:shadow-outline bg-black"
            required
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-primary-title text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="shadow appearance-none border-2 border-purple-500 rounded w-full px-4 py-5 text-purple-400 bg-black  leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-950 text-white font-bold py-4 px-6 w-32 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
          >
            Send
          </button>
        </div>

        {status && <p className="text-center text-green-500 mt-4">{status}</p>}
      </form>
    </main>
  );
};
