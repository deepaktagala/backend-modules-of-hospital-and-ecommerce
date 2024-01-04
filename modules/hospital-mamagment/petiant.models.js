import mongoose, { trusted } from "mongoose"
import { stringify } from "querystring"

const petiantShema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodGroup:{
    type: String,
    required: true
  },
  gender: {
    type: String,
    enun: ["M", "F", "O"],
    required: true
  },
  admittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }
},{timestamps: true})

export const Petiant = mongoose.model("Doctor", petiantShema)