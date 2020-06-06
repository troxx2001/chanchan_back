import { Schema, model } from "mongoose"

let eAdminParametersSchema = new Schema({
	minRangeSearchUser: {
		type: Number,
		default: 0.0,
		required: true
	},
	maxRangeSearchUser: {
		type: Number,
		default: 0.0,
		required: true
	}
})

export default model("EAdminParameters", eAdminParametersSchema)
