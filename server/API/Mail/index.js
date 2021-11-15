//Library
import express from "express";

//config
import { initializeMailgun } from "../../config/mail.config";

const Router = express.Router();

/*
Route     /mail
Des       send a mail
Params    none
Access    Public
Method    POST  
body      from, to, subject, text  
*/

Router.post("/", async (req, res) => {
  try {
    // the mailData object should contain exact properties as below.
    const { from, to, subject, text } = req.body.mailData;

    //Initilazing mailgun library
    const sendMail = initializeMailgun();

    await sendMail.messages().send({ from, to, subject, text });

    return res.status(200).json({ status: "Successfully sent" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
