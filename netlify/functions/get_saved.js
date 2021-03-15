let firebase = require('./firebase')

exports.handler = async function(event) {
  let queryStringUserId = event.queryStringParameters.userId

  // created savedMatches object
  let savedMatches = []

  let db = firebase.firestore()
  let querySnapshot = await db.collection('savedMatches').where('userID', '==', queryStringUserId).get()
  let querySavedMatches = querySnapshot.docs

  for (let i=0; i<querySavedMatches.length; i++){
  let savedID = querySavedMatches[i].id
  let saved = querySavedMatches[i].data()

  // Push attributes of savedMatches
  savedMatches.push({
    userID: saved.userID,
    savedID: saved.matchID,
    savedName: saved.matchName,
    savedEmail:  saved.matchEmail,
    savedIndustry: saved.matchIndustry, 
    savedRole: saved.matchRole,
    savedSize: saved.matchSize,
    savedGeography: saved.matchGeography,
    savedEntrepreneur: saved.matchEntrepreneur
  })
}
  
  return {
    statusCode: 200,
    body: JSON.stringify(savedMatches)
  }
}