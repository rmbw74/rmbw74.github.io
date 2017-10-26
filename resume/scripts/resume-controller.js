//retrieve the blog entries stored in local storage and place into object
const retrievedJobEntries = JSON.parse(localStorage.getItem("jobHistory"));

//target the DOM element that will contain the blog articles
const element = document.getElementById("jobArticleWrapper");

//iterate over the key in the retrievedBlogEntries object
for (var key in retrievedJobEntries) {

  //set current equal to the current key in the object
  let current = retrievedJobEntries[key];
    //iterate over the values in the  array in the current key and build string to inject into the DOM
    for (var i = 0; i < current.length; i++) {
        //set the currentitem to the value of the current array
        let currentitem = current[i];
        element.innerHTML += `<article class="article under">
                              <section class="article__company"><br>${currentitem.company}</section>
                              <section class="articleHeader">${currentitem.title}</section>
                              <section class="article__duration">${currentitem.duration}</section>
                              <section class="article__responsibilities"></p>${currentitem.responsibilities}</p></section>
                             </article>`
    } 
}
