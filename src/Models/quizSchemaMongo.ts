import { Document , Schema , model } from "mongoose";

export interface IQuiz extends Document {
    idQuiz : string,
    nom : string,
    score : number
}

const QuizSchema = new Schema<IQuiz>({
    idQuiz : {
        type : String,
        required : true,
        unique : true
    },
    nom : {
        type : String,
        required : true,
        unique : false
    },
    score : {
        type : Number,
        required : true,
        unique : false
    }
})

export const Quiz = model<IQuiz>('quiz',QuizSchema);

