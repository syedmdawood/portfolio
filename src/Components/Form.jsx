import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/mess", { name, email, message })
      .then((result) => {
        console.log(result);
        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-800 md:pb-24 pb-12"
    >
      <h2 className="my-8 text-center text-4xl">Get In Touch</h2>
      <form
        className="w-full max-w-sm flex flex-col justify-center mx-auto"
        onSubmit={submitHandler}
      >
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Your Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              name="inline-full-name"
              type="text"
              placeholder="What is Your Name?"
              value={name} // Bind input value to state
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              name="inline-email"
              type="email"
              placeholder="Your Email"
              value={email} // Bind input value to state
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-message"
            >
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-message"
              placeholder="Your Message"
              name="inline-message"
              rows="4"
              value={message} // Bind input value to state
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
