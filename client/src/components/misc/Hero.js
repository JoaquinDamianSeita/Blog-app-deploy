import React from "react";

const Hero = () => (
  <div className="text-center hero">
    <img
      className="mb-3 app-logo"
      src={process.env.PUBLIC_URL + "/images/blog.svg"}
      alt="Blog logo"
      width="120"
    />
    <h1 className="mb-4">Blog MERN app</h1>
    <p className="lead">
      Esta es una aplicación web sencilla que simula un blog de posteos
      utilizando el stack MERN
    </p>
  </div>
);

export default Hero;
