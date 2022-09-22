import express from "express";
import config from "./config";

import propietariosRoutes from "./routes/props.routes";

const app = express();

//configuracion del puert0
let port = config.port;
app.set("port", port);

//hacemos que pueda recibir respuestas json
app.use(express.json());
//hacemos que reciba request de formularios
app.use(express.urlencoded({ extended: false }));

app.use(propietariosRoutes);

export default app;
