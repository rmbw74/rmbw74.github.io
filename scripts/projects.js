//Create object to hold projects array
const projectHistory = {}
//Create Blog array to hold each post object
const projects = []

// Create Object for each job entry
const project1 = {
   "projectName":"Personal Site",
   "completeDate":"TBD - Ongoing",
   "techUsed":"HTML, CSS, JavaScript",
   "team":"none",
   "linkToView":"https://rmbw74.github.io"
}
const project2 = {
    "projectName":"Nostrum Company Website",
    "completeDate":"October 13th 2017",
    "techUsed":"HTML, CSS, JavaScript",
    "team":"Greg Lawrence, Kolden Prue, Jenna Solis",
    "linkToView":"https://github.com/nss-day-cohort-22/company-website-ceaseless-ravens"
 }
 const project3 = {
    "projectName":"Real Emergency Website",
    "completeDate":"October 18th 2017",
    "techUsed":"HTML, CSS, JavaScript",
    "team":"Max Wolf, Jesse Page, Lissa Goforth",
    "linkToView":"https://github.com/nss-day-cohort-22/company-website-lopsided-pelicans"
 }

// push all entries into history database using unshift so most recent job is in front
projects.unshift(project1) 
projects.unshift(project2) 
projects.unshift(project3) 

 
//Set the value of the blogPosts key "entries" to the Blog array
projectHistory.entries = projects
//put the blogPosts object into local storage using stringify
localStorage.setItem("projectHistory", JSON.stringify(projectHistory));