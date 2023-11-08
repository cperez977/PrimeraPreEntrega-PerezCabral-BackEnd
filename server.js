import express from "express";
import productosRoutes from "./routes/productosRoutes.js";
import carritosRoutes from "./routes/carritosRoutes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080; 

app.use("/api/products", productosRoutes);
app.use("/api/carts", carritosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
