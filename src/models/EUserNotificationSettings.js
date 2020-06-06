import { Schema, model } from "mongoose"
import EUser from "./EUser"

let eUserNotificationSettingsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: EUser
	},
	interestDeposit: {
		type: Boolean,
		required: true,
		default: false
	},
	retreatRealized: {
		type: Boolean,
		required: true,
		default: false
	},
	appNovelty: {
		type: Boolean,
		required: true,
		default: false
	}
})

export default model("EUserNotificationSettings", eUserNotificationSettingsSchema)
