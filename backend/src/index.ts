import { app, port } from "./app";
import { connectToDatabase } from "./database/connection";

connectToDatabase().then(() => {
  app.listen(port, () => console.log("Server Running"));
}).catch((error) => console.log(error));
