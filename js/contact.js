//Create object to hold contactlistings array
const contactListings = {}
//Create Blog array to hold each post object
const contactInfo = []

// Create Object for each job entry
const info1 = {
    "platformName":"",
    "userName":"",
    "url":"",
    "platformIcon":""
}
const info2 = {
    "platformName":"",
    "userName":"",
    "url":"",
    "platformIcon":""
}
const info3 = {
    "platformName":"",
    "userName":"",
    "url":"",
    "platformIcon":""
}
// push all entries into contactInfo database using unshift so most recent entry is in front
contactInfo.unshift(info1) 
contactInfo.unshift(info2) 
contactInfo.unshift(info3) 

 
//Set the value of the contactListings key "entries" to the contactInfo array
contactListings.entries = contactInfo
//put the contactListings object into local storage using stringify
localStorage.setItem("contactListings", JSON.stringify(contactListings));