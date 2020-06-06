import { Schema, model } from "mongoose"

let eTagSchema = new Schema({
	name: {
		type: String,
		required: true
	}	
})

export default model("ETag", eTagSchema)
