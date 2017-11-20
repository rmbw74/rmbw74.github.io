//retrieve the blog entries stored in local storage and place into object
const retrievedContactEntries = JSON.parse(localStorage.getItem("contactListings"));

//target the DOM element that will contain the blog articles
const element = document.getElementById("contactArticleWrapper");

//iterate over the key in the retrievedBlogEntries object
for (let key in retrievedContactEntries) {

  //set current equal to the current key in the object
  let current = retrievedContactEntries[key];
    //iterate over the values in the  array in the current key and build string to inject into the DOM
    for (let i = 0; i < current.length; i++) {
        //set the currentitem to the value of the current array

        let currentitem = current[i];
        element.innerHTML += `<article class="article under">
                                <figure class="icon">
                                    <a href="${currentitem.url}"> <img class="socialMedia" src="${currentitem.platformIcon}" alt="${currentitem.platformName}"></a>
                                </figure>
                                <section class="article__userName">
                                    <p class="article__text">User Name: ${currentitem.userName}</p>
                                </section>
                             </article>`
    } 
}
