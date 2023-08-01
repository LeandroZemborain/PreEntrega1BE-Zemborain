import express from 'express'
import productsRouter from "./routes/products.router.js"
import carRouter from "./routes/cart.router.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/products",productsRouter)
app.use("/cart",carRouter)



app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})