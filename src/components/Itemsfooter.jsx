import React from "react";

const Itemsfooter = ({ Links, title }) => {
  return (
    <div className="flex justify-center">
      <ul>
        <h1 className="mb-1 font-semibold underline underline-offset-8 text-center">
          {title}
        </h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-400 hover:text-teal-400 duration-300 flex justify-center items-center"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemsfooter;
