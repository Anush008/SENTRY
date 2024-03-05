"use server"
import * as z from "zod"
import { userDataSchema } from "@/schemas"
import { db } from "@/lib/db"



export const updateProfile = async(values:z.infer<typeof userDataSchema>)=>{
   
const validateFields = userDataSchema.safeParse(values)
if(validateFields.success){
  const{id,name,email,phoneNumber,image} =validateFields.data
    await db.user.update({
        where:{id},
        data:{
            name,email,phoneNumber,image
        }
    })
  
        return {message:"Profile updated"}
    
 
}

}