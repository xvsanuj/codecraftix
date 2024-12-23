import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="w-full flex flex-col items-center justify-center pt-32">
          <h1 className="font-bold text-center text-6xl lg:text-9xl uppercase leading-none flex items-center">
            Contact
          </h1>
          <p
            className="lg:text-lg text-sm bebas tracking-widest"
            style={{ wordSpacing: "3.4vw" }}
          >
            get in touch with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
