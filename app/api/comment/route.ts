
import { PrismaClient } from '@prisma/client'
import { NextResponse  } from 'next/server'

const prisma = new PrismaClient()
export async function POST (req: Request, res:Response) {
    const formData = await req.json()
    const resData = await prisma.comment.create(
       {data: {
          title: formData.title,
          content: formData.content
        },} 
    )
    return NextResponse.json(resData)
}