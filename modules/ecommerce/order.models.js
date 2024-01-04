import mongoose from "mongoose"

const orderItemShema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true 
  }
})

const orderScheam = new mongoose.Schema({
  orderPrice:{
    type: Number,
    required: true
  },
  custumer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems: {
    type: [orderItemShema]
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "CENCELLED", "DELIVERED"],
    default: "PENDING"
  }
},{timestamps: true})

export const Order = mongoose.Model("Order", orderScheam)