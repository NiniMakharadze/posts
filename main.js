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
function fetchPosts() {
  const userId = document.getElementById("userId").value;
  let url = "https://jsonplaceholder.typicode.com/posts";
  if (userId) {
    url += `?userId=${userId}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((posts) => {
      const postList = document.getElementById("postList");
      postList.innerHTML = "";
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        postElement.appendChild(bodyElement);

        postList.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error("Failed to fetch posts:", error);
    });
}
