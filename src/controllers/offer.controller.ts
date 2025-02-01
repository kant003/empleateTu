
import {Response, Request, NextFunction} from "express"
import { PrismaClient } from "prisma/prisma-client"
import { OfferService } from '../services/offer.service'
import { HttpException } from "../exceptions/httpException"
const prisma = new PrismaClient()

export class OffertController{

    static async getById(req:Request,res:Response, next:NextFunction){
        try{
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const offer =  await OfferService.getById(id)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }
    }

    static async getAll(req:Request,res:Response, next:NextFunction){
        try{
            const offers =  await OfferService.getAll()
            res.status(200).json(offers)
        }catch(error){
            next(error)
        }
    }

    static async create(req:Request,res:Response, next:NextFunction){
        try{
            const offer = req.body.offer
            const userCreatorID = req.body.user?.id
            console.log(req.body);
            const saveResult = await OfferService.create(offer,userCreatorID)
            res.status(200).json({message:"Creation succesfull",result:saveResult})
        }catch(error){

            next(error)

        }
    }

    static async update(req:Request,res:Response, next:NextFunction){
        try{
            const offer = req.body
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const updateResult = await OfferService.update(id,offer)
            res.status(200).json(updateResult)

        }catch(error){

            next(error)

        }
    }

    static async delete(req:Request,res:Response, next:NextFunction){
        try{
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const deleteResult = await OfferService.delete(id)
            res.status(200).json(deleteResult)

        }catch(error){

            next(error)

        }
    }


 
}


