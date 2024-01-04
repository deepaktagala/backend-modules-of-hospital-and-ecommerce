import mongoose from "mongoose"

const medicalRecordShema = new mongoose.Schema({},{timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", doctorShema)