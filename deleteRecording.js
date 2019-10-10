require('dotenv').config()
const persephonySDK = require('@persephony/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const persephony = persephonySDK(accountId, authToken)

persephony.api.recordings.deleteRec(recordingId)).catch (err => {/** Catch Errors */ })
