//Create A post For Instagram

const post = {
    username : "@learingpoimt1001",
    caption: "Hello InstaGram",
    content : "This Is My #FirstPost I am HappY To Share I Am Learning JS",
    likes: 5000,
    repost:500,
    tags:["#FirstPost", "#CodingJourney", "#JavaScript"],


 // method to show post

 displayPost: function() {
        console.log("Username:", this.username);
        console.log("Caption:", this.caption);
        console.log("Likes:", this.likes);
        console.log("content:", this.content);
        console.log("Tags:", this.tags.join(" "));
    }
 };
// call method
post.displayPost();