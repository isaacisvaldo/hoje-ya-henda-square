import express from 'express';
import bodyParser from "body-parser";
import { config } from "dotenv";
import { routes } from "./router";
import cors from 'cors';

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(routes);
  app.use(function  (req,res,next){
    res.send("Esta Rota não Existe")
}) 
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Rodadndo na Porta ${port}`));
};

main();
