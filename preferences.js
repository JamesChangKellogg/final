// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {
    // Prompt user to select button
    document.querySelector('.welcome').innerHTML = `
    <div class ="flex justify-center text-2xl italic m-10"> ${user.displayName}, what factor is most important in your match?</div>
    `
    // 1️⃣ Industry filter
    let industryButton = document.querySelector('#industry')
    industryButton.addEventListener('click', async function(event) {
        event.preventDefault()
        // Add options
        document.querySelector('.options').innerHTML =`
        <div class="md:w-1/2 p-2 md:text-right font-bold "> Select Industry</div>
        <div class="w-1/2">
            <select name="answer" id="answer" class="md:w-1/3 p-2 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="General">General</option>
                <option value="EdTech">EdTech</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
            </select>
        </div>
        ` 
    })

    // 2️⃣ Role filter
    let roleButton = document.querySelector('#role')
    roleButton.addEventListener('click', async function(event) {
        event.preventDefault()
        // Add options
        document.querySelector('.options').innerHTML =`
        <div class="md:w-1/2 p-2 md:text-right font-bold"> Select Role</div>
        <div class="w-1/2">
            <select name="answer" id="answer" class="md:w-1/3 p-2 border border-gray-400 rounded shadow-xl ml-6">
            <option value="Select">- Select -</option>
            <option value="Business Operations">Business Operations</option>
            <option value="Corporate Strategy">Corporate Strategy</option>
            <option value="Product Management">Product Management</option>
            <option value="Product Marekting">Product Marketing</option>
            <option value="General">General</option>
            </select>
        </div>
        ` 
    })

    // 3️⃣ Geography filter
    let geographyButton = document.querySelector('#geography')
    geographyButton.addEventListener('click', async function(event) {
        event.preventDefault()
        // Add options
        document.querySelector('.options').innerHTML =`
        <div class="md:w-1/2 p-2 md:text-right font-bold"> Select Geography</div>
        <div class="w-1/2">
            <select name="answer" id="answer" class="md:w-1/3 p-2 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="USA-West">USA-West</option>
                <option value="USA-Midwest">USA-Midwest</option>
                <option value="USA-South">USA-South</option>
                <option value="USA-East">USA-East</option>
                <option value="Asia">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Others">Others</option>>
            </select>
        </div>
        `     
    })

    // 4️⃣ Size filter
    let sizeButton = document.querySelector('#size')
    sizeButton.addEventListener('click', async function(event) {
        event.preventDefault()
        // Add options
        document.querySelector('.options').innerHTML =`
        <div class="md:w-1/2 p-2 md:text-right font-bold"> Select Company Size</div>
        <div class="w-1/2">
            <select name="answer" id="answer" class="md:w-1/3 p-2 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="0-10">0 - 10</option>
                <option value="11-100">11 - 100</option>
                <option value="101-500">101 - 500</option>
                <option value="501-1000">501 - 1000</option>
                <option value="1000-10000">1,001 - 10,000</option>
                <option value="10000+">> 10,000</option>
            </select>
        </div>
        ` 
    })

    // 5️⃣ Entrepreneur filter
    let entrepreneurButton = document.querySelector('#entrepreneur')
    entrepreneurButton.addEventListener('click', async function(event) {
        event.preventDefault()
        // Add options
        document.querySelector('.options').innerHTML =`
        <div class="md:w-1/2 p-2 md:text-right font-bold"> Do you aspire to be an entrepreneur?</div>
        <div class="w-1/2">
            <select name="answer" id="answer" class="md:w-1/3 p-2 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        ` 
    })

    // Event listener for submit button
    document.querySelector('.button').addEventListener('click', async function(event) {
        event.preventDefault()
        // Get firebase
        let db = firebase.firestore()

        // Create variables to submit for preferences
        let a = document.getElementById("answer")
        let factor = a.options[a.selectedIndex].text
        console.log(factor)

        // // // Use update method to update empty preferences object (map) in firestore
        db.collection('users').doc(user.uid).update({
            preferences: factor
        })

        // Add see matches button
        document.querySelector('.seeMatches').innerHTML = `
        <button class="text-2xl m-6 text-white-700 bg-purple-300 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500" id="seeMatches">
            <a href=matches.html>
            See matches!
            </a>
        </button>
        `
    })
})
