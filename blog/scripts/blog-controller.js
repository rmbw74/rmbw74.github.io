//retrieve the blog entries stored in local storage and place into object
const getBlog = $.ajax({ url: "https://personalsite-9ec60.firebaseio.com/blogEntries.json" })
debugger
getBlog
.then(result => {
  paginateBlog(result)
  //target the DOM element that will contain the blog articles
/*   const blogEl = document.getElementById("blogArticleWrapper")
  console.log(result)
  //iterate over the key in the retrievedBlogEntries object
  result.forEach( currentitem => {
    blogEl.innerHTML += `<article class="article under">
                          <section class="article__date"><br>${currentitem.date}</section>
                          <section class="articleHeader">${currentitem.title}</section>
                          <section class="article-content"></p>${currentitem.content}</p></section>
                          <section class="tags">${currentitem.tag}</section>
                         </article>` */

  })
  /* for (var key in result) {

      //set current equal to the current key in the object
      let current = [key]
      //iterate over the values in the  array in the current key and build string to inject into the DOM
      for (var i = 0; i < current.length; i++) {
          //set the currentitem to the value of the current array
          let currentitem = current[i]
      }
  } */

