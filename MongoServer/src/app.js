import express from  "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors"; //for  forntend and backend 
import router from "./router";
const app= express();

//for typscript code only, use require for js
app.use(express.json());
app.use(helmet());
app.use(cors());
router(app);
export default app;