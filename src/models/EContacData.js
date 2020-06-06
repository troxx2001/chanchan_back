import { Schema, model } from "mongoose"
 
let eContactDataSchema = new Schema({
	cellPhone: {
		type: String,
		default: "",
		required: true
	},
	email: {
		type: String,
		default: "",
		required: true
	},
	address: {
		type: String,
		default: "",
		required: true
	},
	zipCode: {
		type: String,
		default: "",
		required: true
	}
})

export default model("EContacData", eContactDataSchema)
