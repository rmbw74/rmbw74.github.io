//Create object to hold blog post array
const blogPosts = {}
//Create Blog array to hold each post object
const Blog = []

// Create Object for each blog post
const post1 = {
    "date": "Friday October 6th",
    "tag":"NSS",
    "title":"End of my first week at NSS",
    "content": "So it's 2:50pm Friday October 6th 2017. How are things going? Well I havent thrown myself out the window yet! So lets take that as a personal victory. We've talked about a lot of stuff. I clearly don't understand any of it, but they keep telling me that's ok. I'm looking forward to next week! So stay tuned! "
}
const post2 ={
    "date": "Friday October 13",
    "tag":"NSS",
    "title":"Ok.. second week over",
    "content": "Oh man, Friday the 13th and we had to complete our first group project, launching a company website using a database constructed and pushed to local storage. I didn't think we were going to have anything to present due to a gitastrophy as instructor Steve would call it, but the team pulled it out at the last second. I feel like I have a better understanding of git and pushing things to local storage. Let's just hope that my own brain stores it!"
}
const post3 ={
    "date": "Monday October 16",
    "tag":"NSS",
    "title":"Group project part Deux! the groupening!",
    "content": "Ok so instructor Steve was Soooo impressed with our projectes we get to do it all over again with new teams and new people."

}
// push all entries into history database using unshift so newest entry is in front
Blog.unshift(post1) 
Blog.unshift(post2) 
Blog.unshift(post3) 

 
//Set the value of the blogPosts key "entries" to the Blog array
blogPosts.entries = Blog
//put the blogPosts object into local storage using stringify
localStorage.setItem("blogPosts", JSON.stringify(blogPosts));


