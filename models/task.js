import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type:String,
        required:false,
    },
    complete:{
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
