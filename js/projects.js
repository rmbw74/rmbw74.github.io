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


// push all entries into history database using unshift so most recent job is in front
projects.unshift(project1) 

 
//Set the value of the blogPosts key "entries" to the Blog array
projectHistory.entries = projects
//put the blogPosts object into local storage using stringify
localStorage.setItem("projectHistory", JSON.stringify(projectHistory));