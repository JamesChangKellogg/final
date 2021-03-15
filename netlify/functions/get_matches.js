let firebase = require('./firebase')

exports.handler = async function(event) {
  let queryStringUserId = event.queryStringParameters.userId

  let savedMatches = []

  let db = firebase.firestore()
  let querySnapshot = await db.collection('savedMatches').where('userID', '==', queryStringUserId).get()
  let querySavedMatches = querySnapshot.docs

  for (let i=0; i<querySavedMatches.length; i++){
  let savedID = querySavedMatches[i].id
  let saved = querySavedMatches[i].data()

  savedMatches.push({
    id: savedID,
    text: saved.matchName
  })
}
  
  return {
    statusCode: 200,
    body: JSON.stringify(savedMatches)
  }
}