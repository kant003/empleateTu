import { Offer, PrismaClient, User } from "prisma/prisma-client";
import { HttpException } from "../exceptions/httpException";
import { connect } from "http2";

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass"

export class OfferService {

    static async getById(id: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id:id } })
        if (!findOffer) throw new HttpException(404,"Offer not found")
        return findOffer
    }

    static async getAll() {
        const findOffers = await prisma.offer.findMany()
        if (!findOffers) throw new HttpException(404,"Offers not found")
        return findOffers
    }

    static async create(offer: Offer, userCreatorID : number){
        console.log(offer)
        console.log(userCreatorID)
        return await prisma.offer.create({
            data:{
                ...offer,
                idUserCreator:userCreatorID
            }
        })
    }

    static async delete(id: number){
        const findOffer = await prisma.offer.findUnique({where:{id}})
        if(!findOffer) throw new HttpException(404,'Offer not found')
        return prisma.offer.delete({where:{id}})
    }

    static async update(id:number,offer: Offer){
        const findOffer = await prisma.offer.findUnique({where:{id}})
        if(!findOffer) throw new HttpException(404,'Offer not found')
        return prisma.offer.update({
        data:offer,
        where:{id}})
    }

}