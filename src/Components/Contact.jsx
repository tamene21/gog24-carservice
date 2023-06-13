import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#fdfdfd] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ada5fdb7-c7a3-403b-8798-03c23a85e924"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 py-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ffd73f] text-black">
            Contact
          </p>
          <p className="text-black py-4">
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Ride
        </button>
      </form>
    </div>
  );
};

export default Contact;
