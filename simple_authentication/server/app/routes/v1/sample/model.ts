import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = new mongoose.Schema({
  message: {
    type: String,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.SAMPLE, schema);
