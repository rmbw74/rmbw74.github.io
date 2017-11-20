//retrieve the blog entries stored in local storage and place into object
const retrievedBlogEntries = JSON.parse(localStorage.getItem("blogPosts"));
//create a variable to hold the retrieved blog array
const retrievedBlogArray = retrievedBlogEntries.entries;
//target the DOM element that will contain the information for the blog articles
const titleEl = document.getElementById("blogEntry-title");
const dateEl = document.getElementById("blogEntry-date");
const contentEl = document.getElementById("blogEntry-content");
const tagsEl = document.getElementById("blogEntry-tags");

//target the button that will save the new entries
const saveButtonEl = document.getElementById("blogEntry-save-blog")
function clearEntryForm(){
    titleEl.value = "";
    dateEl.value = "";
    contentEl.value = "";
    tagsEl.value = "";
}
function createNewBlogEntry(date, tags, title, content){
    return Object.create(null, {
        "date": { value: date, enumerable: true },
        "tag": { value: tags, enumerable: true },
        "title": { value: title, enumerable: true },
        "content": { value: content, enumerable: true }
    })

}

//add event handler to the saveButton
saveButtonEl.addEventListener("click", function(event){
    console.log(retrievedBlogArray);
    let newEntry = createNewBlogEntry(dateEl.value, tagsEl.value, titleEl.value, contentEl.value)
    retrievedBlogArray.unshift(newEntry);
    console.log(retrievedBlogArray);
    retrievedBlogEntries.entries = retrievedBlogArray
    console.log(retrievedBlogEntries)
    localStorage.setItem("blogPosts", JSON.stringify(retrievedBlogEntries));

    clearEntryForm();
})


