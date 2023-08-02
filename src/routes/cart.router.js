import {Router} from "express"
import {cartManager} from "../CartManager.js"

const router = Router()

router.get('/', async (req, res) => {
    try {
        const carritos = await cartManager.getCart();
        res.json(carritos);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const carrito = await cartManager.getOneCart(+id);
        res.json(carrito);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const respuesta = await cartManager.createCart();
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/:cid/product/:pid', async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const respuesta = await cartManager.addProductToCart(cid, pid);
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


export default router;
  

  
 

 