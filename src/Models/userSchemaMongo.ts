import { Document , Schema , model } from "mongoose"; 


export interface IUser extends Document {
    nom : string,
    motDePasse : string,
    scrore : number 
}   


const UserSchema = new Schema<IUser>({
    nom : {
        type : String,
        required : true,
        unique : true
    } ,
    motDePasse : {
        type : String,
        required : true
    },
    scrore : {
        type : Number,
        required : false
    }
})

export const User = model<IUser>('user',UserSchema)


export interface IUserType {
    nom : string,
    motDePasse : string
}