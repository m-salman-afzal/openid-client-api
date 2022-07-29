import express from "express";
import cors from "cors";
import morgan from "morgan";

const bootstrap = express();

const limit = {
    limit: "50mb",
    extended: true
};

bootstrap.use(express.json(limit));
bootstrap.use(express.urlencoded(limit));
bootstrap.use(cors());
bootstrap.use(morgan("dev"));

export default bootstrap;
