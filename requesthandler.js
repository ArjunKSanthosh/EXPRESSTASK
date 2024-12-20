import userSchema from "./models/user.models.js"

export async function addUser(req,res){
        try {
            const{...user}=req.body
            const data=await userSchema.create({...user});
            return res.status(201).send({msg:data})
        } catch (error) {
            return res.status(404).send({msg:error})
        }

}