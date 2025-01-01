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

document.getElementById("btn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
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
      })
  });
  
  