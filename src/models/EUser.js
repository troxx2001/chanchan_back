import { Schema, model } from "mongoose"
import ECredentials from "./ECredentials"
import EBasicData from "./EBasicData"

export const ENUM_ROL = {
	ADMIN: "ADMIN",
	USER: "USER"
}

export const ENUM_USER_STATUS = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	DELETED: "DELETED"
}

let eUserSchema = new Schema({
	roles: {
		type: [String],
		required: true,
		default: [],
		validate: {
			validator: roles => {
				let defaultRoles = Object.keys(ENUM_ROL)
	
				return roles.some(rol => !defaultRoles.some(defaultRol === rol))
			},
			message: (props) => {
				return `Los roles del usuario (${props.value}) no corresponden a: ${Object.keys(ENUM_ROL)}`
			}
		}
	},
	credentials: {
		type: Schema.Types.ObjectId,
		ref: ECredentials
	},
	basicData: {
		type: Schema.Types.ObjectId,
		ref: EBasicData
	},
	status: {
		type: String,
		required: true,
		enum: Object.keys(ENUM_USER_STATUS)
	},
	chainCoin: {
		type: Number,
		required: true,
		default: 0.0
	},
	latitude: {
		type: Number,
		required: true,
		default: 0.0
	},
	longitude: {
		type: Number,
		required: true,
		default: 0.0
	},
})

export default model("EUser", eUserSchema)
