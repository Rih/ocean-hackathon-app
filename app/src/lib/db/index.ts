// Dexie
import Dexie from 'dexie'
import {
  USER_MODEL,
  EVALUATION_MODEL,
} from '$lib/db/constants'

// Models
import {
  user,
  evaluation,
} from '$lib/db/models'

const db = new Dexie('mydb')

db.version(1).stores({
  [USER_MODEL]: user(),
  [EVALUATION_MODEL]: evaluation(),
})

export default db
