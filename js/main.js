// Higher Order Functions

// A Higher Order Function is a function that atleast does one of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as it's result

// Callback function, passed as a parameter in the higher order

/* function callbackfunction() {
  console.log("I am a callback function");
}

// Higher Order Function
function higherOrderFunction(func) {
  console.log("I am a higher order function");
  func();
}

higherOrderFunction(callbackfunction); */

import { posts } from "./posts.js";

// .forEach()

posts.forEach((posts) => {
  console.log(posts);
});

console.clear();

// .filter()

const filteredPosts = posts.filter((posts) => {
  return posts.userId === 1;
});

console.log(filteredPosts);

// .map()

const mappedPosts = filteredPosts.map((posts) => {
  return posts.id * 10;
});

console.log(mappedPosts);

// .reduce()

const reducedPostsValue = mappedPosts.reduce((sum, posts) => {
  return sum + posts;
});

console.log(reducedPostsValue);
