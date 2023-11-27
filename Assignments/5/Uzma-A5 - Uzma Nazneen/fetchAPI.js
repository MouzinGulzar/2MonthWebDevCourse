let container = document.querySelector(".container");

async function posts() {
  let response = await fetch(`https://dummyjson.com/posts`);
  let data = await response.json();

  data.posts.map((post) => {
    let tags = "";

    post.tags.map((tag) => {
      tags += `<span>${tag}</span>`;
    });
    let html = `
        <div class="card">
            <img src="https://picsum.photos/${Math.floor(
              Math.random() * (500 - 400) + 400
            )}" alt="" />
            <div class="description">
            <a href="/post.html?id=${post.id}">${
      post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title
    }</a>
            <div class="tags">
                ${tags}
            </div>
            <p><span class="reactions">${post.reactions}</span> Likes</p>
            </div>
        </div>
        `;

    container.innerHTML += html;
  });
}

posts();
