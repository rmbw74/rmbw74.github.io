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
const post4 ={
    "date": "Monday October 23",
    "tag":"NSS",
    "title":"Foomergency - it's definitely a monday",
    "content": "So, Foo Fighters have cancelled the show in Nashville tonight, My master bathroom window has a broken seal and my bathroom now has a waterfall feature! Today we were introduced to array methods and chaining. I also spent hours trying to chain .forEach before discovering that it cannot be chained. Woo!"

}
const post5 ={
    "date": "Tuesday October 24",
    "tag":"NSS",
    "title":"Just keep swimming...",
    "content": "Today we got interviewed by the instructors of the class so that they could better asses our needs. Meg was awesome, and assured me that feeling like everyone else in the class knows more than I do..was completely normal... Just keep swimming."

}
const post6 ={
    "date": "Wednesday October 25",
    "tag":"NSS",
    "title":"Lexscopawhaa?",
    "content": "Instructor Steve was nice enough to draw out a course map for us today.. apparently we are on the edge of the hook of dispair.. next stop lexscopistan"

}
const post7 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Main",
    "title":"Pagination",
    "content": "Today I'm going to attempt pagination on this page. If im successful you may see multiple crazy or repeated entries... "

}
const post8 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 8",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post9 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 9",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post10 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 10",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post11 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 11",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post12 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 12",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post13 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 13",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post14 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 14",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}
const post15 ={
    "date": "Thursday October 26",
    "tag":"NSS Pagination Copy 15",
    "title":"Pagination",
    "content": "entry to test if pagination is working properly"

}

// push all entries into history database using unshift so newest entry is in front
Blog.unshift(post1)
Blog.unshift(post2)
Blog.unshift(post3)
Blog.unshift(post4)
Blog.unshift(post5)
Blog.unshift(post6)
Blog.unshift(post7)



//Set the value of the blogPosts key "entries" to the Blog array
blogPosts.entries = Blog
//put the blogPosts object into local storage using stringify
localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
