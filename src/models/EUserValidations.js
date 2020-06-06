import { Schema, model } from "mongoose"
import EUser from "./EUser"

let eUserValidationsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: EUser
	},
	termConditionsAccepted: {
		type: Boolean,
		required: true,
		default: false
	},
	emailVerified: {
		type: Boolean,
		required: true,
		default: false
	},
	cellphone_verified: {
		type: Boolean,
		required: true,
		default: false
	},
	identificationVerified: {
		type: Boolean,
		required: true,
		default: false
	}
})

export default model("EUserValidations", eUserValidationsSchema)
