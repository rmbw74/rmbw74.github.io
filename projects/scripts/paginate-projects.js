let database = {}
const getProjects = $.ajax({ url: "https://personalsite-9ec60.firebaseio.com/projectEntries.json" })
getProjects.then(result => {
    database.projects = result
    paginateProjects(result)
})

filterEl = document.querySelector("input[name='articleFilter']")

filterEl.addEventListener(
    "keyup",
    event => {
        //grab the input value of the filter after the user types more than 3 characters
        if (event.target.value.length >=3){
            const input = event.target.value.toLowerCase()
            console.log(input)
            console.log(database.projects)
            let articles = database.projects
            //create a new filtered array
            filteredArticles = articles.filter(item => {
                // Does it maatch any tags?
                const matchingProject = item.projectName.toLowerCase().includes(input)

                // Does it match anything in the title?
                const matchingTech = item.techUsed.toLowerCase().includes(input)

                // Does is match anything in the body?
                const matchingTeam = item.team.toLowerCase().includes(input)

                return matchingProject || matchingTech || matchingTeam
            })
            paginateProjects(filteredArticles)
        }else {
            paginateProjects(database.projects)
        }
    }
)


paginateProjects = function(retrievedItems){
    //variable to contain the total number of blog entries
    const totalEntries = retrievedItems.length

    //variable to contain how many items that will be diplayed per page
    const entriesPerPage = 3

    //variable to contain the value of how many pages we will have in total
    const numberOfPages = Math.ceil(totalEntries / entriesPerPage)

    //variable that will hold the target DOM element where we will be placing the Paginator
    const paginationEL = document.getElementById("paginator")

    //variable that will hold the target DOM element where we will be placing the blog entries
    const blogEl = document.getElementById("projectArticleWrapper")

    //variable that will hold the blog Array to be sliced up later and diplayed on the page
    const blogArray  = retrievedItems

    //*******************Build the pagination string to populate the paginationEL

    //variable to hold the pagination string starting with initial unordered list element before looping
    let paginationString = "<ul>"

    //add the previous bracket to the pagination string with the id of previous
    paginationString += "<a id='previous' href='#'>&lt; </a>"

    //begin the loop to add the appropriate amount of page links to the paginator
    for(let i = 0; i < numberOfPages; i++){
        paginationString += `<li><a class="projectPage page-${i+1}" href="#"> ${i+1} </a></li>`
    }
    //add the next bracket to the pagination screen
    paginationString += " <a id='next' class='page-2' href='#'> &gt;</a>"
    //add the closing </UL> tag to the pagination screen
    paginationString += "</ul>"

    //add the pagination string to the target DOM element
    paginationEL.innerHTML = paginationString

    //Add a variable to hold the reference to the pervious and next arrows we created in the DOM
    const previousEl = document.getElementById("previous")
    const nextEl = document.getElementById("next")

    //this function will be invoked every time a user clicks on one of the links inside the pagination string
    function displayProjects(event){

        // first clear the DOM of anything that may be displayed
        blogEl.innerHTML = ""

        // figure out which link the user clicked on
        //grab the class from the event.target.classlist and turn it into an array
        const classes = event.target.classList
        const classArray = Array.from(classes)

        // find the class we want to target "should have class page-n
        const targetClass = classArray.find(function(clazz){
            if(clazz.startsWith("page-")){
                return clazz
            }
        })


        // use the dash in the class to split into an array with the page number that we need
        const pageNumberArray = targetClass.split("-")

        // get the actual page number out of the array
        const actualPageNumber = pageNumberArray[1]

        // convert the string that is in pageNumberArray into an integer
        const integerPageNumber = parseInt(actualPageNumber)

        //change the class name of the previous arrow
        // if you are on the first page hide the previous arrow
        if ((integerPageNumber - 1) === 0) {
            previousEl.style.display = "none"
        } else {
            //if not on first page set the display to inline so it shows, and it's class to equal your current page - 1
            previousEl.style.display = "inline"
            previousEl.className = `page-${integerPageNumber - 1}`
        }
        //change the class name of the next arrow
        // if you are on the last page hide the next arrow
        if ((integerPageNumber + 1) > numberOfPages) {
            nextEl.style.display = "none"
        } else {
            //if not on last page set the display to inline so it shows, and it's class to equal your current page + 1
            nextEl.style.display = "inline"
            nextEl.className = `page-${integerPageNumber + 1}`
        }

        //slice up the array of blog entries so you are only displaying the appropriate amount declared in entriesPerPage
        const entriesToDisplay = blogArray.slice(
            (integerPageNumber - 1) * entriesPerPage ,
            integerPageNumber * entriesPerPage
        )
        //call the populateBlog function passing to it the entries to display object
        populateBlog(entriesToDisplay, blogEl)
        //this function accepts an object (item) that contains the entries that are going to be displayed on the page and builds the appropriate DOM string using a forEach
        function populateBlog(item, blogEl){
            //iterate over the item and for each currentitem, build the string
            item.forEach(function(currentitem){
                blogEl.innerHTML+=
                `<article class="article under">
                <section class="articleHeader">
                    <p>${currentitem.projectName}</p>
                </section>
                <section class="article__completeDate">
                    <p class="article__text">Date Completed: ${currentitem.completeDate}</p>
                </section>
                <section class="article__techUsed">
                    <p class="article__text">Technologies Used: ${currentitem.techUsed}</p>
                </section>
                <section class="article__team">
                    <p class="article__text"> Teammates: ${currentitem.team}</p>
                </section>
                <section class="article__link">
                    <p class="article__text">Project Link: <a href="${currentitem.linkToView}">Click Here to View</a></p>
                </section>
             </article>`
            })
        }
    }

    // Get the array of pagination anchor tags we added to the DOM
    const pageLinks = document.getElementsByClassName("projectPage")

    // Add event listeners to each <a> element in the pagination
    for (let j = 0; j < pageLinks.length; j++) {
        let thisPageEl = pageLinks[j]
        thisPageEl.addEventListener("click", displayProjects, false)
    }
    displayProjects({
        "target": {
            "classList": ["page-1"]
        }
    })
    //add event listener to the previous / next arrows
    previousEl.addEventListener("click", displayProjects)
    nextEl.addEventListener("click", displayProjects)


}