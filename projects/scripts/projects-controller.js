//retrieve the blog entries stored in local storage and place into object
const retrievedProjectEntries = JSON.parse(localStorage.getItem("projectHistory"));

//target the DOM element that will contain the blog articles
const element = document.getElementById("projectArticleWrapper");

//iterate over the key in the retrievedBlogEntries object
for (let key in retrievedProjectEntries) {

    //set current equal to the current key in the object
    let current = retrievedProjectEntries[key];
    //iterate over the values in the  array in the current key and build string to inject into the DOM
    for (let i = 0; i < current.length; i++) {
        //set the currentitem to the value of the current array
        let currentitem = current[i];
        element.innerHTML += `<article class="article under">
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
    } 
}