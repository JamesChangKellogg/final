// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {
    // Event listener for submit button
    document.querySelector('.button').addEventListener('click', async function(event) {
        // Get firebase
        let db = firebase.firestore()

        // Create variables to submit for preferences
        let a = document.getElementById("industry")
        let industry = a.options[a.selectedIndex].text

        let b = document.getElementById("role")
        let role = b.options[b.selectedIndex].text

        let c = document.getElementById("size")
        let size = c.options[c.selectedIndex].text

        let d = document.getElementById("geography")
        let geography = d.options[d.selectedIndex].text

        let e = document.getElementById("startups")
        let startups = e.options[e.selectedIndex].text

        // Create preferences object
        let preferences = {
            industry: industry,
            role: role,
            size: size,
            geography, geography,
            startups: startups
        }

        // // Use update method to update empty preferences object (map) in firestore
        db.collection('users').doc(user.uid).update({
            preferences: preferences
        })
    })
})
