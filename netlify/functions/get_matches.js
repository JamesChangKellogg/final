let firebase = require('./firebase')

exports.handler = async function(event) {

   // Push to this later
  let matches = []
    // logged in user id
  let queryStringUserId = event.queryStringParameters.userId

    // logged in user preferences
  let db = firebase.firestore()
  let querySnapshot = await db.collection('preferences').doc(queryStringUserId).get()
  let userRefData = querySnapshot.data()

  // Grab user data
  let userMatchingFactor = userRefData.matchingFactor
  let userIndustry = userRefData.industry
  let userRole = userRefData.role
  let userSize = userRefData.size
  let userGeography = userRefData.geography
  let userEntrepreneur = userRefData.entrepreneur

      // 🟢 START: 1️⃣ of 5️⃣ if statements: Industry
    if (userMatchingFactor == "industry"){
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('industry', '==', userIndustry).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data

            // push data into object
            matches.push({
                userID: queryStringUserId,
                matchID: match.userID,
                matchName: match.name,
                matchEmail:  match.email,
                matchIndustry: match.industry, 
                matchRole: match.role,
                matchSize: match.size,
                matchGeography: match.geography,
                matchEntrepreneur: match.entrepreneur
              })
        } // close for loop to write matches into object
    } // 🛑 CLOSE: 1️⃣ of 5️⃣ if statements: Industry
 
      // 🟢 START: 2️⃣ of 5️⃣ if statements: role
      else if (userMatchingFactor == "role"){
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('role', '==', userRole).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data

            // push data into object
            matches.push({
                userID: queryStringUserId,
                matchID: match.userID,
                matchName: match.name,
                matchEmail:  match.email,
                matchIndustry: match.industry, 
                matchRole: match.role,
                matchSize: match.size,
                matchGeography: match.geography,
                matchEntrepreneur: match.entrepreneur
              })
        } // close for loop to write matches into object
    } // 🛑 CLOSE: 2️⃣ of 5️⃣ if statements: role

      // 🟢 START: 3️⃣ of 5️⃣ if statements: size
      else if (userMatchingFactor == "size"){
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('size', '==', userSize).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data

            // push data into object
            matches.push({
                userID: queryStringUserId,
                matchID: match.userID,
                matchName: match.name,
                matchEmail:  match.email,
                matchIndustry: match.industry, 
                matchRole: match.role,
                matchSize: match.size,
                matchGeography: match.geography,
                matchEntrepreneur: match.entrepreneur
              })
        } // close for loop to write matches into object
    } // 🛑 CLOSE: 3️⃣ of 5️⃣ if statements: size
    
          // 🟢 START: 4️⃣ of 5️⃣ if statements: geography
      else if (userMatchingFactor == "geography"){
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('geography', '==', userGeography).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data

            // push data into object
            matches.push({
                userID: queryStringUserId,
                matchID: match.userID,
                matchName: match.name,
                matchEmail:  match.email,
                matchIndustry: match.industry, 
                matchRole: match.role,
                matchSize: match.size,
                matchGeography: match.geography,
                matchEntrepreneur: match.entrepreneur
              })
        } // close for loop to write matches into object
    } // 🛑 CLOSE: 4️⃣ of 5️⃣ if statements: geography

      // 🟢 START: 5️⃣ of 5️⃣ if statements: entrepreneur
      else if (userMatchingFactor == "entrepreneur"){
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('entrepreneur', '==', userEntrepreneur).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data

            // push data into object
            matches.push({
                userID: queryStringUserId,
                matchID: match.userID,
                matchName: match.name,
                matchEmail:  match.email,
                matchIndustry: match.industry, 
                matchRole: match.role,
                matchSize: match.size,
                matchGeography: match.geography,
                matchEntrepreneur: match.entrepreneur
              })
        } // close for loop to write matches into object
    } //🛑 Close 5️⃣ of 5️⃣ if statements: entrepreneur

  return {
    statusCode: 200,
    body: JSON.stringify(matches)
  }
}