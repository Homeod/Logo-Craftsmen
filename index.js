const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const path = require("path");

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(
  cors({
    origin: [
      "https://logocraftsmen.com",
      "https://logo-craftsmen.vercel.app",
      "https://www.logocraftsmen.com",
    ],
  })
);

var smtpTransport = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  auth: {
    user: process.env.authuser,
    pass: process.env.authpass,
  },
  secure: true,
});

smtpTransport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages", success);
  }
});

app.post("/contactAdmin", async (req, res) => {
  var data = req.body;

  var mailOptions = {
    from: process.env.authuser,
    to: process.env.clientemail,
    cc: data.email,
    subject: `Thank You, ${data.name}, for Contacting Us – We’re on It!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Message from ${data.name}</h2>
        <div style="background-color: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="color: #555; line-height: 1.5;">
            <strong>Name:</strong> ${data.name}
          </p>
          <p style="color: #555; line-height: 1.5;">
            <strong>Email:</strong> ${data.email}
          </p>
          <p style="color: #555; line-height: 1.5;">
            <strong>Phone:</strong> ${data.phone}
          </p>
          <p style="color: #555; line-height: 1.5; margin-top: 20px;">
            ${data.message}
          </p>
        </div>
        <p style="color: #333; font-size: 14px; margin-top: 30px; text-align: center;">
          Hello! We wanted to let you know we received your message and will be in touch ASAP.
        </p>
        <p style="color: #333; font-size: 16px; text-align: center;">
          Regards,<br>Logo Craftsmen
        </p>
        <p style="color: #777; font-size: 12px; text-align: center; margin-top: 20px;">
          Thank you for contacting us.
        </p>
      </div>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    } else {
      console.log(info);
      res.status(200).json(info.response);
    }
  });
});

app.post("/uploadImages", async (req, res) => {
  var data = req.body;

  var mailOptions = {
    from: process.env.authuser,
    to: process.env.clientemail,
    cc: data.email,
    subject: `Thank You, ${data.name}, for Contacting Us – We’re on It!`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Message from ${data.name}</h2>
        <div style="background-color: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="color: #555; line-height: 1.5;">
            <strong>Name:</strong> ${data.name}
          </p>
          <p style="color: #555; line-height: 1.5;">
            <strong>Email:</strong> ${data.email}
          </p>
          <p style="color: #555; line-height: 1.5;">
            <strong>Phone:</strong> ${data.phone}
          </p>
          <p style="color: #555; line-height: 1.5; margin-top: 20px;">
            ${data.message}
          </p>
        </div>
        <p style="color: #333; font-size: 14px; margin-top: 30px; text-align: center;">
          Hello! We wanted to let you know we received your message and will be in touch ASAP.
        </p>
        <p style="color: #333; font-size: 16px; text-align: center;">
          Regards,<br>Logo Craftsmen
        </p>
        <p style="color: #777; font-size: 12px; text-align: center; margin-top: 20px;">
          Thank you for contacting us.
        </p>
      </div>
    `,
    attachments: data.ImageFile.map((file, index) => {
      const isApplication = file.includes("application");
      const isImage = file.includes("image");

      if (!(isApplication || isImage)) {
        console.error(`Invalid file type for file at index ${index}`);
        return null;
      }

      const splitResult = isApplication
        ? file.split("application/")[1].split(";")
        : file.split("image/")[1].split(";");

      if (!splitResult || splitResult.length < 1) {
        console.log("null came at index", index + 1);
        return null;
      }

      const fileExtension = splitResult[0];
      const contentType = isApplication
        ? `application/${fileExtension}`
        : `image/${fileExtension}`;
      const content = Buffer.from(file.split("base64,")[1], "base64");

      return {
        filename: `file${index + 1}`,
        contentType,
        content,
      };
    }).filter(Boolean),
  };
  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    } else {
      res.status(200).json(info.response);
    }
  });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.listen(port, () => {
  console.log("We are live on port 4444");
});
