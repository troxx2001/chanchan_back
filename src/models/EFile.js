import { Schema, model } from "mongoose"

let eFileSchema = new Schema({
	name: {
		type: String,
		default: "",
		required: true
	},
	originalName: {
		type: String,
		default: "",
		required: true
	},
	url: {
		type: String,
		default: "",
		required: true
	}
})

export default model("EFile", eFileSchema)
