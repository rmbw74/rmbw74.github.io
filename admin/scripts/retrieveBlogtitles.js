//author Ray Medrano //Purpose This module grabs blogs from firebase and displays the titles and an edit affordance to the dom
//Grab the blogs from firebase
let editmode = false
let database = {}
$.ajax({ url: "https://personalsite-9ec60.firebaseio.com/blogEntries.json" })
.then(result => {
    database.blog = result
    displayBlogTitles(result)
})
// Display the blogs in the dom with an edit affordance
let displayBlogTitles = database => {
    //target the DOM element we will display the titles in
    const displayEl = document.querySelector("#retrievedBlogs")
    displayEl.innerHTMl = ""
    let string = "<ul>"
    //iterate over all blog articles and build up a string to display
    database.forEach(blogEntry => {
        string += `<li>Blog Title: ${blogEntry.title} <button id="editArticle_${blogEntry.blogId}">Edit</button></li>`
    })
    string += "</ul>"
    displayEl.innerHTML = string
}

//add an event listener for the edit buttons
document.querySelector("#retrievedBlogs").addEventListener("click", event => {
    if (event.target.id.startsWith("editArticle_")) {
        //which blog article did they click on?
        currentArticle = database.blog.find(
            blogArticle => blogArticle.blogId === parseInt(event.target.id.split("_")[1])
        )
        titleEl.value = currentArticle.title
        dateEl.value = currentArticle.date
        contentEl.value = currentArticle.content
        tagsEl.value = currentArticle.tag
        editmode = true

    }
})

