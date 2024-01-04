const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const port = 4444;
const path = require("path");

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(cors({ origin: "https://logo-craftsmen.vercel.app" }));

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
      return {
        filename: `image${index + 1}.jpg`,
        contentType: "image/jpeg",
        content: new Buffer.from(file.split("base64,")[1], "base64"),
      };
    }),
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

// Your other routes and configurations go here

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
