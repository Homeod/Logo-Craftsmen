const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const port = 4444;
const path = require("path");

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(
  cors({
    origin: [
      "https://logocraftsmen.com",
      "https://logo-craftsmen.vercel.app",
      "http://localhost:5173",
    ],
  })
);

// app.use(cors({ origin: "http://localhost:5173" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "dist", "index.html"))
  );
}

app.post("/contactAdmin", async (req, res) => {
  var data = req.body;
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.authuser,
      pass: process.env.authpass,
    },
  });

  var mailOptions = {
    from: process.env.authuser,
    to: process.env.clientemail,
    cc: data.email,
    subject: `New Message from ${data.name}`,
    html: `
    <h3>${data.name}</h3>
    <h3>${data.email}</h3>
    <p>Phone : ${data.phone}</p>
    <br></br>
    <p>${data.message}</p>

    Thankyou.
    `,
  };
  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    } else {
      res.status(200).json(info.response);
    }
    smtpTransport.close();
  });
});

app.post("/uploadImages", async (req, res) => {
  var data = req.body;
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.authuser,
      pass: process.env.authpass,
    },
  });
  var mailOptions = {
    from: process.env.authuser,
    to: process.env.clientemail,
    cc: data.email,
    subject: `New Message from ${data.name}`,
    html: `<h3>${data.name}</h3>
    <h3>${data.email}</h3>
    <p>Phone : ${data.phone}</p>
    <br></br>
    <h3>${data.service}</h3>
    <p>${data.message}</p>

    Thankyou.
    `,
    attachments: data.ImageFile.map((file, index) => {
      const isApplication = file.includes("application");
      const isImage = file.includes("image");

      // console.log(isApplication, isImage);

      if (!(isApplication || isImage)) {
        console.error(`Invalid file type for file at index ${index}`);
        // res.status(400);
        return null;
      }

      const splitResult = isApplication
        ? file.split("application/")[1].split(";")
        : file.split("image/")[1].split(";");

      if (!splitResult || splitResult.length < 1) {
        console.log("null came at index", index + 1);
        // res.status(400);
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
    }).filter(Boolean), // Filter out null values
  };
  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    } else {
      res.status(200).json(info.response);
    }
    smtpTransport.close();
  });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.listen(port, () => {
  console.log("We are live on port 4444");
});
