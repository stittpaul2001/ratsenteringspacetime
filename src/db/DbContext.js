import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { MissionSchema } from '../models/Mission.js';
import { LocationSchema } from '../models/Location.js';
import { RatsSchema } from '../models/Rats.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Missions = mongoose.model('Mission', MissionSchema)

  Locations = mongoose.model('Location', LocationSchema)

  Rats = mongoose.model('Rat', RatsSchema)
}

export const dbContext = new DbContext()
