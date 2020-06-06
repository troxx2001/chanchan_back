import { Schema, model } from "mongoose"

let eCredentialsSchema = new Schema({
	username: {
		type: String,
		default: "",
		required: true
	},
	password: {
		type: String,
		default: "",
		required: true
	},
	googleToken: {
		type: String,
		default: "",
		required: true
	},
	facebookToken: {
		type: String,
		default: "",
		required: true
	}
})

export default model("ECredentials", eCredentialsSchema)
