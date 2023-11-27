let userPostContainer = document.querySelector(".userPostContainer");
let profilePicture = document.querySelector(".profile");
let username = document.querySelector(".name");
let job = document.querySelector(".job-title");


const getId = () => {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  return id;
};


async function getUserDetails() {
  let response = await fetch(`https://dummyjson.com/users/${getId()}`);
  let data = await response.json();

  let profile = data.image;
  let name = data.firstName + " " + data.lastName;
  let jobTitle = data.company.title;
  return { profile, name, jobTitle };
}

async function getPost() {
  let response = await fetch(`https://dummyjson.com/post/${getId()}`);
  let data = await response.json();


  let {profile, name, jobTitle} = await getUserDetails();

  profilePicture.setAttribute("src", profile);
  username.innerHTML += `${name}`;
  job.textContent = jobTitle;

}
getPost();


async function userPosts() {
    let response = await fetch(`https://dummyjson.com/users/${getId()}/posts`);
    let data = await response.json();
  
    data.posts.map((post) => {
let html = `
      
        <div class="card"> 
          <div class="description">
            <h1>${post.title}</h1>
          <p> ${post.body}</p>
            </div>
        </div>
        `;

        userPostContainer.innerHTML += html;
    });
  }
  
userPosts();
