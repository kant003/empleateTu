import { Router } from "express";
import { OffertController } from "@/controllers/offer.controller";
import { isAuthenticate } from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/isAdmin.middleware";
const router = Router()

//API REST FULL


//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/',isAuthenticate, OffertController.getAll)
//localhost:3000/api/offerts/xxxx
router.get('/:id',isAuthenticate, OffertController.getById)
//POST añadir una oferta nueva localhost:3000/api/offerts/  {body}
router.post('/',isAuthenticate,isAdmin, OffertController.create)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX  
router.delete('/:id',isAuthenticate,isAdmin, OffertController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX  {body}
router.put('/:id',isAuthenticate,isAdmin, OffertController.update)   

// Calificamos una oferta x   {body}
//router.post('/:id/rate/',OffertController.rate)  
// Vemos que calificación (total) se le ha data a una oferta X
//router.get('/:id/rate/', OffertController.getRate)



export default router