import mongoose from "mongoose"

const Schema = mongoose.Schema

export const LocationSchema = new Schema(
  {
    country: { type: String, required: true },
    area: { type: String, required: true },
    labels: [{ type: String, required: true }],
    creatorId: { type: Schema.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

LocationSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})