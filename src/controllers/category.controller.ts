
import {Response, Request, NextFunction} from "express"
import { PrismaClient } from "prisma/prisma-client"
import { CategoryService } from '../services/category.service'
import { HttpException } from "../exceptions/httpException"
const prisma = new PrismaClient()

export class CategoryController{

    static async getById(req:Request,res:Response, next:NextFunction){
        try{
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const offer = CategoryService.getById(id)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }
    }

    static async getAll(req:Request,res:Response, next:NextFunction){
        try{
            const categories = CategoryService.getAll()
            res.status(200).json(categories)
        }catch(error){
            next(error)
        }
    }

    static async create(req:Request,res:Response, next:NextFunction){
        try{
            
            const category = req.body.category
            const saveResult = CategoryService.create(category)
            res.status(200).json(saveResult)
        }catch(error){

            next(error)

        }
    }

    static async update(req:Request,res:Response, next:NextFunction){
        try{
            const category = req.body.category
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const updateResult = CategoryService.update(id,category)
            res.status(200).json(updateResult)

        }catch(error){

            next(error)

        }
    }

    static async delete(req:Request,res:Response, next:NextFunction){
        try{
            const id = req.params.id
            if(typeof id!="number") throw new HttpException(400,"Param error")
            const deleteResult = CategoryService.delete(id)
            res.status(200).json(deleteResult)

        }catch(error){

            next(error)

        }
    }


 
}


