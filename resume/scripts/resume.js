//Create object to hold job history array
const jobHistory = {}
//Create jobs array to hold each post object
const jobs = []

// Create Object for each job entry
const job1 = {
    "company":"Borgwarner",
    "title":"Team Leader",
    "duration":"1998 - 2002",
    "responsibilities":"Responsible for overseeing daily operations on a shift basis of 40+ production operators working in various Cells. Helped Shift supervisor make decisions based on customer requirements, manufacturing capacity, and Machine Uptime. Used Kan-Ban Inventory system to relocate operators to operations that were most needed. Performed Basic Set-up / Maintenance on Furnace Bonding Equipment, 80 ton OBI presses, and Metal Roll forming Machines."

}
const job2 = {
    "company":"Borgwarner",
    "title":"Process Control Technician",
    "duration":"2002 - 2005",
    "responsibilities":"Responsible for maintaining all Controlled Quality Documentation for QS-9000 / TS16949 Quality Systems. Assisted cross functional Engineering teams, performing Tests, Running DOE's and Investigating Customer Issues/Concerns. Implemented Plant Wide Electronic Statistical Process Control Software including Training of End Users and Support Staff Performed Weekly Layered Audits of Production Departments to help maintain QS-9000 / TS16949 Compliance. Served on 8D Teams to help resolve customer issues. "

}
const job3 = {
    "company":"Borgwarner",
    "title":"Quality Systems Technician",
    "duration":"2005 - 2017",
    "responsibilities":"Responsible for  the creation and  or maintenance of all electronic systems related to quality assurance at the plant level including but not limited to: SharePoint Administration of plants quality team site. Administrative control of all document control systems. Administrative control of plant wide change management system. Administrative control of layered process audit system. Responsible for layered process audit development, deployment, scheduling and verification of corrective action. Internal Auditing for TS16949, ISO140001 and AS9100.  Assist Manufacturing Engineering in the creation of Operator Work Instruction and Documentation for new processes launched in the plant. "

}

// push all entries into history database using unshift so most recent job is in front
jobs.unshift(job1)
jobs.unshift(job2)
jobs.unshift(job3)


//Set the value of the blogPosts key "entries" to the Blog array
jobHistory.entries = jobs
//put the blogPosts object into local storage using stringify
localStorage.setItem("jobHistory", JSON.stringify(jobHistory));