// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {

    // Add options
    document.querySelector('.options').innerHTML =`
    <div class="flex justify-center h-200 ml-2 text-lg">
        <div class="w-1/2 text-right">
        <label class = "md:block mt-4 ml-2 font-bold px-4 py-2 align-middle"
            for="industry" >Select industry</label>
        </div>
        <div class="w-1/2">
            <select name="industry" id="industry" class="md:p-2 w-64 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="General">General</option>
                <option value="EdTech">EdTech</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
            </select>
        </div>
    </div>

    <div class="flex justify-center h-200 ml-2 text-lg">
        <div class="w-1/2 text-right">
        <label class = "md:block mt-4 ml-2 font-bold px-4 py-2 align-middle"
            for="industry" >Select role</label>
        </div>
            <div class="w-1/2">
            <select name="role" id="role" class="md:p-2 w-64 border border-gray-400 rounded shadow-xl ml-6">
                <option value="Select">- Select -</option>
                <option value="Business Operations">Business Operations</option>
                <option value="Corporate Strategy">Corporate Strategy</option>
                <option value="Product Management">Product Management</option>
                <option value="Product Marekting">Product Marketing</option>
                <option value="General">General</option>
            </select>
        </div>
    </div>


    <div class="flex justify-center h-200 ml-2 text-lg">
    <div class="w-1/2 text-right">
    <label class = "md:block mt-4 ml-2 font-bold px-4 py-2 align-middle"
        for="size" >Select company size</label>
    </div>
    <div class="size w-1/2">
        <select name="size" id="size" class="md:p-2 w-64 border border-gray-400 rounded shadow-xl ml-6">
            <option value="Select">- Select -</option>
            <option value="0-10">0 - 10</option>
            <option value="11-100">11 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1000-10000">1,001 - 10,000</option>
            <option value="10000+">> 10,000</option>
        </select>
    </div>
    </div>

    <div class="flex justify-center h-200 ml-2 text-lg">
    <div class="w-1/2 text-right">
    <label class = "md:block mt-4 ml-2 font-bold px-4 py-2"
        for="geography" >Select geography</label>
        </div>
            <div class="w-1/2">
        <select name="geography" id="geography" class="md:p-2 w-64 border border-gray-400 rounded shadow-xl ml-6">
            <option value="Select">- Select -</option>
            <option value="USA-West">USA-West</option>
            <option value="USA-Midwest">USA-Midwest</option>
            <option value="USA-South">USA-South</option>
            <option value="USA-East">USA-East</option>
            <option value="Asia">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Others">Others</option>
        </select>
    </div>
    </div>

    <div class="flex justify-center h-200 ml-2 text-lg">
    <div class="w-1/2 text-right">
    <label class = "md:block mt-4 ml-2 font-bold px-4 py-2 align-middle"
        for="entrepreneur" >Do you aspire to be an entrepreneur?</label>
        </div>
            <div class="w-1/2">
        <select name="entrepreneur" id="entrepreneur"class="md:p-2 w-64 border border-gray-400 rounded shadow-xl ml-6"> 
            <option value="Select">- Select -</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
    </div>
    `

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

        let e = document.getElementById("entrepreneur")
        let entrepreneur = e.options[e.selectedIndex].text

        // Create preferences object
        let preferences = {
            industry: industry,
            role: role,
            size: size,
            geography, geography,
            entrepreneur: entrepreneur
        }

        // // Use update method to update empty preferences object (map) in firestore
        db.collection('users').doc(user.uid).update({
            preferences: preferences
        })
    })
})
