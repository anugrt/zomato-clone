//Libraries
import express from "express";
import passport from "passport";
import RazorPay from "razorpay";
import { v4 as uuidv4 } from "uuid";

//Database Modal
import { MenuModel } from "../../database/allModel";

const Router = express.Router();

/*
Route       /Payments/new
Des         for creating a order/payment
Params      none
Access      Public
Method      POST    
*/

Router.post("/new", async (req, res) => {
  try {
    const instance = new RazorPay({
      key_id: process.env.RZR_PAY_ID,
      key_secret: process.env.RZR_PAY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `${uuidv4()}`,
    };
    const order = await instance.orders.create(options);
    return res.json({ order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
