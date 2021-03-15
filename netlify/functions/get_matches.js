let firebase = require('./firebase')

exports.handler = async function(event) {
  
  let matchesData = []
  let db = firebase.firestore()
  let querySnapshot = await db.collection('savedMatches').get()
  let savedMatches = querySnapshot.docs

  for (let i=0; i<savedMatches.length; i++){
  let savedID = savedMatches[i].id
  let saved = savedMatches[i].data()

  matchesData.push({
    id: savedID,
    text: saved.matchName
  })
}

  // let querySnapshot = await db.collection('savedMatches')
  //                             .where('userID', '==', userID).orderBy('matchID').get()
  // let userID
  
  return {
    statusCode: 200,
    body: JSON.stringify(matchesData)
  }
}