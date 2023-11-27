let thumbnail = document.querySelector(".thumbnail");
let title = document.querySelector(".title");
let tags = document.querySelector(".tags");
let profilePicture = document.querySelector(".profile");
let username = document.querySelector(".name");
let job = document.querySelector(".job-title");
let description = document.querySelector(".description");
let reactions = document.querySelector(".reactions");


const getId = () => {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  return id;
};

async function getUserDetils() {
  let response = await fetch(`https://dummyjson.com/user/${getId()}`);
  let data = await response.json();

  let profile = data.image;
  let name = data.firstName + " " + data.lastName;
  let jobTitle = data.company.title;

  return { profile, name, jobTitle };
  
}

async function getPost() {
  let response = await fetch(`https://dummyjson.com/post/${getId()}`);
  let data = await response.json();

  thumbnail.setAttribute("src", "https://picsum.photos/1800");
  
  title.textContent = data.title;

  data.tags.map((tag) => {
    tags.innerHTML += `<span>${tag} </span>`;
  });

  let {profile, name, jobTitle} = await getUserDetils();

  profilePicture.setAttribute("src", profile);
  username.innerHTML += `<a class="userlink" href="/user-posts.html?id=${data.id}">${name}</a>`;
  job.textContent = jobTitle;
  

  description.textContent = data.body;

  reactions.textContent = data.reactions;
}

getPost();
