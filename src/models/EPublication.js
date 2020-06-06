import { Schema, model } from "mongoose"
import EUser from "./EUser"
import EFile from "./EFile"
import ETransaction from "./ETransaction"
import ETag from "./ETag"

export const ENUM_TYPE_PUBLICATION = {
	LOAN: "LOAN", // Prestamo,
	RENTAL: "RENTAL", // Renta
	SALE: "SALE", // Venta
	DONATION: "DONATION" // Donación
}

let ePublicationSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: EUser,
		required: true
	},
	image: {
		type: Schema.Types.ObjectId,
		ref: EFile
	},
	video: {
		type: Schema.Types.ObjectId,
		ref: EFile
	},
	name: {
		type: String,
		default: "",
		required: true
	},
	description: {
		type: String,
		default: "",
		required: true
	},
	type: {
		type: String,
		required: true,
		enum: Object.keys(ENUM_TYPE_PUBLICATION)
	},
	latitude: {
		type: Number,
		default: 0.0,
		required: true
	},
	longitude: {
		type: Number,
		default: 0.0,
		required: true
	},
	active: {
		type: Boolean,
		default: true,
		required: true
	},
	visibilityTime: {
		type: Date,
		default: Date.now,
		required: true
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	price: {
		type: Number,
		default: 0.0,
		required: true
	},
	transaction: {
		type: Schema.Types.ObjectId,
		ref: ETransaction
	},
	tags: {
		type: [String],
		default: []
	}
})

export default model("EPublication", ePublicationSchema)
