import express, { Application, Request, Response } from "express";
import { proxy, REGISTRY_URL } from "./proxy";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((req: Request, res: Response) => {
  const currentServer = Math.floor(Math.random() * REGISTRY_URL.length);

  proxy.web(req, res, {
    target: REGISTRY_URL[currentServer].url,
    changeOrigin: true,
  });
  proxy.on("error", function (err, req, res) {
    console.log("Error occurr" + err);
  });
});

app.listen(8080, () => {
  console.log("load balancer running on 8080");
});

REGISTRY_URL.forEach((server,i) => {
  app.listen(server.port, () => {
    console.log(`Server ${i+1} running on ${server.port}`);
  });
});
