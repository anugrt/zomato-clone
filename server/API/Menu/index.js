//Libraries
import express from "express";

//Database Model
import { MenuModel, Imagemodel } from "../../database/allModel";

const Router = express.Router();

/*
Route       /menu/list
Des         get all list of menu based on id
Params      _id
Access      Public
Method      GET    
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const menus = await MenuModel.findById(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /menu/image
Des         get all list of menu images based on id
Params      _id
Access      Public
Method      GET    
*/
Router.get("/image/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
  
      const menus = await Imagemodel.findOne(_id);
  
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;
