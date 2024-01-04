import mongoose from  "mongoose"


const todoScheama = new mongoose.Schema({
  content: {
      type: String,
      required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodo : [
    {
      type: mongoose,Schema,Types,ObjectId,
      ref: "Subtodo"
    }
  ] //array of subtodo
}, {timestamps: true})


export const Todo = mongoose.model("Todo", todoSchema )