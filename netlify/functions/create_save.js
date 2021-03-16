// /.netlify/functions/create_preferences
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()
  let body = JSON.parse(event.body)
  // Set user variables based on JSONbody
  let userID = body.userID
  let matchID = body.matchID
  let matchName = body.matchName
  let matchEmail = body.matchEmail
  let matchIndustry = body.matchIndustry
  let matchRole = body.matchRole
  let matchSize = body.matchSize
  let matchGeography = body.matchGeography
  let matchEntrepreneur = body.matchEntrepreneur


// Create preferences object
  let newSaved = { 
    userID: userID,
    matchID: matchID,
    matchName: matchName,
    matchEmail: matchEmail,
    matchIndustry: matchIndustry,
    matchRole: matchRole,
    matchSize: matchSize,
    matchGeography: matchGeography,
    matchEntrepreneur: matchEntrepreneur
  }

  // Set new Saved Match
  await db.collection('savedMatches').doc(`${userID}-${matchID}`).set(newSaved)

  // Return section
  return {
    statusCode: 200,
    body: JSON.stringify(newSaved)
  }

}