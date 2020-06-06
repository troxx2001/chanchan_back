import { Schema, model } from "mongoose"
import EUser from "./EUser"

export const ENUM_TOPIC = {
	ANYONE: "ANYONE",
	PRICE: "PRICE",
	QUALITY: "QUALITY",
	PRODUCT_STATE: "PRODUCT_STATE"
}

let eCalificationSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: EUser,
		required: true
	},
	value: {
		type: Number,
		required: true,
		default: 0.0
	},
	description: {
		type: String,
		required: true,
		default: ""
	},
	topic: {
		type: String,
		default: ENUM_TOPIC.ANYONE,
		enum: Object.keys(ENUM_TOPIC)
	}
})

export default model("ECalification", eCalificationSchema)
