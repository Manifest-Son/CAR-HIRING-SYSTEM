import express from "express";
import userRouter from "./routes/users.routes.js";
import payRouter from "./routes/payment.routes.js";
import bookRouter from "./routes/booking.routes.js";
import vehRouter from "./routes/vehicle.routes.js";
import catRouter from "./routes/categories.routes.js";
import driveRouter from "./routes/drivers.routes.js";
import inqRouter from "./routes/inquiry.routes.js";
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/payment", payRouter);
app.use("/api/booking", bookRouter);
app.use("/api/vehicle", vehRouter);
app.use("/api/category", catRouter);
app.use("/api/driver", driveRouter);
app.use("/api/inquiry", inqRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
