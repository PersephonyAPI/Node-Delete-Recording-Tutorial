const persephonySDK = require('@persephony/sdk')
const accountId = process.env.accountId
const authToken = process.env.authToken
const persephony = persephonySDK(accountId, authToken)

persephony.api.recordings.deleteRec(recordingId)).catch (err => {/** Catch Errors */ })
