import app from "./bootstrap";

import loginRoutes from "../Routes/LoginRoutes";
import userRoutes from "../Routes/UserRoutes";
import clientRoutes from "../Routes/ClientRoutes";

app.use("/auth", loginRoutes);
app.use("/user", userRoutes);
app.use("/client", clientRoutes);
