//Create object to hold contactlistings array
const contactListings = {}
//Create Blog array to hold each post object
const contactInfo = []

// Create Object for each job entry
const info1 = {
    "platformName":"Twitter",
    "userName":"@Fuzzbear",
    "url":"https://twitter.com/fuzzbear",
    "platformIcon":"/images/icon-twitter.png"
}
const info2 = {
    "platformName":"LinkedIn",
    "userName":"Raymond Medrano",
    "url":"https://www.linkedin.com/in/raymond-medrano-02477214/",
    "platformIcon":"/images/linkedin.png"
}
const info3 = {
    "platformName":"Facebook",
    "userName":"Raymond J Medrano",
    "url":"https://www.facebook.com/raymond.j.medrano",
    "platformIcon":"/images/facebook.png"
}
// push all entries into contactInfo database using unshift so most recent entry is in front
contactInfo.unshift(info1) 
contactInfo.unshift(info2) 
contactInfo.unshift(info3) 

 
//Set the value of the contactListings key "entries" to the contactInfo array
contactListings.entries = contactInfo
//put the contactListings object into local storage using stringify
localStorage.setItem("contactListings", JSON.stringify(contactListings));