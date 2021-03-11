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
        
        // Create sign out button
        document.querySelector('.sign-in-or-sign-out').innerHTML = `
        <div class ="text-purple-500 font-6xl font-bold"> Hi ${user.displayName}!</div>
        <button class="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl sign-out">Sign Out</button>
        `
        // Sign out listener & logout workflow
        document.querySelector('.sign-out').addEventListener('click', function(event) {
            console.log('sign out clicked')
            firebase.auth().signOut()
            document.location.href = 'homepage.html'
        })

        // Add buttons
        document.querySelector('.homepage').innerHTML = `
            <div class = "buttons md:flex justify-center">
                <button class="text-2xl m-6 text-white-700 bg-purple-300 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500" id="preferences">
                    <a href=preferences.html>
                        Submit preferences
                    </a>
                </button>
                <button class="text-2xl m-6 text-white-700 bg-purple-300 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500" id="savedMatches">
                    <a href=savedMatches.html>
                        See saved matches
                    </a>
                </button>
            </div>
        `
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

        // Add "Description of Kellogg Buddies and sample profiles for non-logged in users"
        document.querySelector('.homepage').innerHTML = `
        <div class="m-8 text-center text-2xl">
            At Kellogg Buddies, you will be matched with peers like...
        </div>
        <div class="md:flex justify-center">
            <div class="border-4 md:w-1/5 border-gray-800 rounded xl mx-4 mt-1">
                <h1 class="text-center text-2xl m-2 font-bold">Peter Pan</h1>
                <p class="ml-2 text-">Program: 2Y</p>
                <p class="ml-2">Year: 2022</p>
                <p class="ml-2">Background: Finance</p>
                <p class="ml-2">Target Industry: Tech</p>
                <p class="ml-2">Target Function: PMM</p>
                <p class="ml-2">Hometown: Seattle, WA</p>
            </div>
            <div class="border-4 md:w-1/5 border-gray-800 rounded xl mx-4 mt-1">
                <h1 class="text-center text-2xl m-2 font-bold">Mickey Mouse</h1>
                <p class="ml-2">Program: JV</p>
                <p class="ml-2">Year: 2021</p>
                <p class="ml-2">Background: Finance</p>
                <p class="ml-2">Target Industry: Tech</p>
                <p class="ml-2">Target Function: PMM</p>
                <p class="ml-2">Hometown: Seattle, WA</p>
            </div>
            <div class="border-4 md:w-1/5 border-gray-800 rounded xl mx-4 mt-1">
                <h1 class="text-center text-2xl m-2 font-bold">Donald Duck</h1>
                <p class="ml-2">Program: JD-MBA</p>
                <p class="ml-2">Year: 2022</p>
                <p class="ml-2">Background: Finance</p>
                <p class="ml-2">Target Industry: Tech</p>
                <p class="ml-2">Target Function: PMM</p>
                <p class="ml-2">Hometown: Seattle, WA</p>
            </div>
        </div>
        `
    }
})