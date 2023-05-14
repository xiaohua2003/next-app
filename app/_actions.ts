
"use server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function handleForm(data:FormData) {
 
    const title = data.get("title") as string;
    const content = data.get("content") as string;
     await prisma.comment.create(
        {data: {
           title: title,
           content: content
         },} 
     )
 }

 export async function getFormData() {
   const resData = await prisma.comment.findUnique({
   where: {
    id: 1
   }
   })

   return resData
 }

 export async function updateFormData(data:FormData) {
    const title = data.get("title") as string;
    const content = data.get("content") as string;
   await prisma.comment.update({
    where: {
        id: 2
    },
    data: {
        title: title,
        content: content
    }
   })
 }