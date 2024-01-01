const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 4444;

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.use(cors());

app.post("/contactAdmin", async (req, res) => {
  var data = req.body;
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "designlogocraftsmen@gmail.com",
      pass: "jlao loxo nbfh pfls",
    },
  });
  var mailOptions = {
    from: "designlogocraftsmen@gmail.com",
    to: "art@logocraftsmen.com",
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
      user: "designlogocraftsmen@gmail.com",
      pass: "jlao loxo nbfh pfls",
    },
  });
  var mailOptions = {
    from: "designlogocraftsmen@gmail.com",
    to: "art@logocraftsmen.com",
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

app.listen(port, () => {
  console.log("We are live on port 4444");
});
