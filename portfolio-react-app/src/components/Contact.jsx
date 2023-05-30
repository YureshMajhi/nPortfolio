import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-2"
    >
      <form action="" className="max-w-[600px] w-full mx-auto flex flex-col">
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold border-b-4 border-pink-600 inline">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // You can submit the form below or send me an email at -
            yureshmee@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 bg-[#ccd6f6] my-4"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="p-2 bg-[#ccd6f6]"
        ></textarea>

        <button className="border-2 m-4 py-3 px-4 mx-auto text-white hover:border-pink-600 hover:bg-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
