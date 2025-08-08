import mongoose from "mongoose"


const Schema = mongoose.Schema

export const RatsSchema = new Schema(

  {
    name: { type: String, required: true },
    callsign: { type: String, required: true },
    picture: { type: String, required: true },
    specialties: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }

)

RatsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})