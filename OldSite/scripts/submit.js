//retrieve the blog entries stored in local storage and place into object
//const retrievedBlogEntries = JSON.parse(localStorage.getItem("blogPosts"));
//create a variable to hold the retrieved blog array
//const retrievedBlogArray = retrievedBlogEntries.entries;
//target the DOM element that will contain the information for the blog articles
const titleEl = document.getElementById("blogEntry-title")
const dateEl = document.getElementById("blogEntry-date")
const contentEl = document.getElementById("blogEntry-content")
const tagsEl = document.getElementById("blogEntry-tags")
//create a generator function

//target the button that will save the new entries
const saveButtonEl = document.getElementById("blogEntry-save-blog")
function clearEntryForm(){
    titleEl.value = "";
    dateEl.value = "";
    contentEl.value = "";
    tagsEl.value = "";
}
const createId = function*(startfrom = 0) {
    let uniqueId = 1
    while (true) {
        yield uniqueId + startfrom
        uniqueId++
    }
}

function createNewBlogEntry(date, tags, title, content, id = null){
    //check to see if we have existing blog enties
    if (database.blog.length !== 0){
        //sort the existing blogs by id, Highest to lowest
        let sortedBlogs = database.blog.sort((p,n) => n.blogId - p.blogId)
        //set next nextId equal to the id of the highest entry at array index zero
        nextId = createId(sortedBlogs[0].blogId).next().value
        //if no blog entries next id = 0
    } else if (database.blog.length === 0){
        nextId = createId(0).next().value
    }
    return Object.create(null, {
        "blogId": {value: (id === null) ? nextId : id, enumerable: true},
        "date": { value: date, enumerable: true },
        "tag": { value: tags, enumerable: true },
        "title": { value: title, enumerable: true },
        "content": { value: content, enumerable: true }
    })

}

//add event handler to the saveButton
saveButtonEl.addEventListener("click", function(event){
    //console.log(retrievedBlogArray);
    if (editmode === false){
        debugger
        let newEntry = createNewBlogEntry(dateEl.value, tagsEl.value, titleEl.value, contentEl.value)
        //database.blog.unshift(newEntry)
        $.ajax({
            url: "https://personalsite-9ec60.firebaseio.com/blogEntries.json",
            method: "POST",
            data: JSON.stringify(newEntry)
        }).then(r => {
            displayBlogTitles(r)
            console.log(newEntry)
        })

    } else {
        const blogIndex = database.blog.findIndex(currentBlog => currentBlog.blogId === currentArticle.blogId)
        database.blog[blogIndex] = createNewBlogEntry(
            dateEl.value,
            tagsEl.value,
            titleEl.value,
            contentEl.value,
            currentArticle.blogId)
            editmode = false
            displayBlogTitles(database.blog)
    }
    //retrievedBlogArray.unshift(newEntry);
    //console.log(retrievedBlogArray);
    //retrievedBlogEntries.entries = retrievedBlogArray
    //console.log(retrievedBlogEntries)
    //localStorage.setItem("blogPosts", JSON.stringify(retrievedBlogEntries));

    clearEntryForm();
})


