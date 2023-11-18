let title = document.querySelector(".title");
let tags = document.querySelector(".tags");
let description = document.querySelector(".description");
let reactions = document.querySelector(".reactions");

const getId = () => {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  return id;
};

async function getPost() {
  let response = await fetch(`https://dummyjson.com/post/${getId()}`);
  let data = await response.json();

  title.textContent = data.title;

  data.tags.map((tag) => {
    tags.innerHTML += `<span>${tag} </span>`;
  });

  description.textContent = data.body;

  reactions.textContent = data.reactions;
}

getPost();
