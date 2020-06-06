import { Schema, model } from "mongoose"
import EUser from "./EUser"
import ECalification from "./ECalification"

let eTransactionSchema = new Schema({
	interestedUser: {
		type: Schema.Types.ObjectId,
		ref: EUser
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	},
	offerValue: {
		type: Number,
		required: true,
		default: 0.0
	},
	califications: [{
		type: Schema.Types.ObjectId,
		ref: ECalification
	}]
})

export default model("ETransaction", eTransactionSchema)
