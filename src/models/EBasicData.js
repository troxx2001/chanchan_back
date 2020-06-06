import { Schema, model } from "mongoose"
import EFile from "./EFile" 
import EContactData from "./EContacData"

export const ENUM_GENDER = {
	MALE: "MALE",
	FEMALE: "FEMALE",
	OTHER: "OTHER"
}

let eBasicDataSchema = new Schema({
	photo: {
		type: Schema.Types.ObjectId,
		ref: EFile
	},
	identification: {
		type: String,
		default: "",
		required: true
	},
	firstName: {
		type: String,
		default: "",
		required: true
	},
	lastName: {
		type: String,
		default: "",
		required: true
	},
	birthDay: {
		type: Date,
		default: Date.now
	},
	gender: {
		type: String,
		required: true,
		enum: Object.keys(ENUM_GENDER)
	},
	contactData: {
		type: Schema.Types.ObjectId,
		ref: EContactData
	}
})

export default model("EBasicData", eBasicDataSchema)
