"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const connection_1 = require("./database/connection");
(0, connection_1.connectToDatabase)().then(() => {
    app_1.app.listen(app_1.port, () => console.log("Server Running"));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map