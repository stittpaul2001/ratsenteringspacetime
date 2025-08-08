import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codename: { type: String, required: true },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    missionId: { type: Schema.ObjectId, ref: 'Account', required: true },
    locationId: { type: Schema.ObjectId, ref: 'Location', required: true },
    ratId: { type: Schema.ObjectId, ref: 'Rats', required: true },
    completed: { type: Boolean, required: true, default: false }
  },

  { timestamps: true, toJSON: { virtuals: true } }
)

MissionSchema.virtual('mission', {
  localField: 'missionId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  foreignField: '_id',
  ref: 'Rats',
  justOne: true,
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: true,
})