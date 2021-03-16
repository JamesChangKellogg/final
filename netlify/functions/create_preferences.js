// /.netlify/functions/create_preferences
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()
  let body = JSON.parse(event.body)
  // Set user variables based on JSONbody
  let userID = body.userID
  let name = body.name
  let email = body.email
  let industry = body.industry
  let role = body.role
  let size = body.size
  let geography = body.geography
  let entrepreneur = body.entrepreneur
  let matchingFactor = body.matchingFactor

// Create preferences object
  let newPreferences = { 
    userID: userID,
    name: name,
    email: email,
    industry: industry,
    role: role,
    size: size,
    geography: geography,
    entrepreneur: entrepreneur,
    matchingFactor: matchingFactor
  }

  // SET IS CREATING MULTIPLE PER EACH USER
  await db.collection('preferences').doc(userID).set(newPreferences)

  // Return section
  return {
    statusCode: 200,
    body: JSON.stringify(newPreferences)
  }

}