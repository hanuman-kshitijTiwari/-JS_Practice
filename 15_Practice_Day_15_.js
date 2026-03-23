// Intermediate Methods In JS 
// 1- indexOf : return index of Something

let arr = ["Red","Blue","YelloW"];

let result1 = arr.indexOf("Red");
let result2 = arr.indexOf("YelloW");
let result3 = arr.indexOf("Blue");
console.log(result1,result2,result3);  // 0 , 2 ,1 ;

// Real-Life Example-1;

let cart = ["shoes", "shirt", "watch"];
let itToRemove = "shirt";
let index = cart.indexOf(itToRemove);
if(index !=  -1){
    cart.splice(index,1)
}

console.log(cart);  // ['shoes', 'watch']
//User ne “Remove” button dabaya → to indexOf() se item dhundta hai → splice() se hata deta hai




//2. Prevent duplicate entries (Form / Signup)
let user = ["Kshitij","Ayush"];
let newUser = "Avni";
if(user.indexOf(newUser) == -1){
    user.push(newUser);
}else{
    console.log("User Already Exist");
}
console.log(user);


//3. Toggle Like Button
let likedPosts = [101, 102];
let postId = 101;
let index2 = likedPosts.indexOf(postId);
if (index === -1) {
  likedPosts.push(postId); // like
} else {
  likedPosts.splice(index, 1); // unlike
}

console.log(likedPosts);

//4. Search + Highlight
let products = ["Phone","LapTop","KeyBords"];
let Search = "Phone";
let index3 = products.indexOf(Search);
if(index3 != -1){
    console.log("Find Product At Index", index3);
}else{
    products.push(Search);
}





//2- includes: Search for A Value 
// Include Use To Find That Value Exist In the Our Array or Not 
// “array me value hai ya nahi → true / false me batata hai”

let arr1 = [10, 20, 30];
console.log(arr1.includes(10));
console.log(arr1.includes(20));
console.log(arr1.includes(30));
console.log(arr.includes(50)); // false



