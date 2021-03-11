firebase.auth().onAuthStateChanged(async function(user) {
// Workflow for logged in user
    if (user) {
        let db = firebase.firestore()

        // Create collection of users
        // ❓ Do we need to create all the fields now and set them later❓
        db.collection('users').doc(user.uid).set({
            name: user.displayName,
            email: user.email
        })


    } 
    
// Workflow for non logged in user
    else {
        let ui = new firebaseui.auth.AuthUI(firebase.auth())
        let authUIConfig = {
            signInOptions: [
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: 'homepage.html'
        }
        ui.start('.sign-in-or-sign-out', authUIConfig)
    }
})