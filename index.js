// fetch('https://api.github.com/users/Sourav-Kumar007')
// .then((res) => {
//   return res.json();
// })
// .then((items) => {
//   console.log(items);
// });

// fetch("https://api.github.com/users/Sourav-Kumar007/repos")
// .then((res) => {
//   return res.json();
// })
// .then((items) => {
//   items.forEach((repo)=>{
//     console.log(repo.name);
//   })
// });

// document.getElementById("btn").addEventListener("click", function () {
//     const username = document.getElementById("username").value;
//     const repoList = document.getElementById("repoList");
//     const show = document.getElementById("show");
//     show.innerHTML = "Here is your repolist";

//     repoList.innerHTML = "";

//     const apiUrl = `https://api.github.com/users/${username}/repos`;

//     fetch(apiUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((repos) => {
//         repos.forEach((repo) => {
//           repoList.innerHTML += `<li> ${repo.name}`;
//         });
//       })

//   });

document.getElementById("btn").addEventListener("click", function () {
  const apiUrl = "https://api.github.com/users";
  const main = document.querySelector("#main");
  const username = document.getElementById("username").value;

  fetch(`${apiUrl}/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((repos) => {
      console.log(repos);
      const card = `
         <div class="card">
        <div mt-2>
            <img class="avatar" src="${repos.avatar_url}" alt="florin">
        </div>
        <div class="user-info mt-5">
            <h2 class="font-serif font-medium text-2xl"> Name : ${repos.name} </h2>
            <p class="font-serif font-medium text-2xl"> Bio : ${repos.bio} </p>

            <ul class="info mt-5">
                <li> ${repos.followers}<strong class="italic"> Followers </strong></li>
                <li>${repos.following}<strong class="italic"> Following </strong></li>
                <li>${repos.public_repos}<strong class="italic"> Repos </strong></li>
            </ul>

             <button class="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 mb-3"
      >
        Your Repositories
      </button>


            <div class="pl-5">
            <ul id="repoList" class="list-disc">
               
            </ul>
            </div>
        </div>
    </div>
        
        `;
        
      main.innerHTML = card;
      getRepos(username);
      
    });
});

const getRepos = (username) => {
  const repoList = document.getElementById("repoList");
  repoList.innerHTML = "";
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((repos) => {
      repos.forEach((repo) => {
        repoList.innerHTML += `<li> ${repo.name}`;
      });
    });
};
