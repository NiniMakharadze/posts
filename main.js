const form = document.querySelector("form");
const userIdField = form.querySelector("#userId");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userId = userIdField.value;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const filteredPosts = userId
    ? posts.filter((post) => post.userId === parseInt(userId))
    : posts;
  console.log(filteredPosts);
});
