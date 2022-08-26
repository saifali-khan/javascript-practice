
let form = document.getElementById("myform");
form.addEventListener("submit", function (event) {


  event.preventDefault()
  let search = document.getElementById("search")
  let url = "https://api.github.com/users/";
  let removeSpace = search.value.split(" ").join("")


  fetch(url + removeSpace)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Not Found") {
        
        alert("No Such User");
      } else {

        document.getElementById("profile-card").style.display = "flex";
        let name = document.getElementById("user-name");
        let gitProfile = document.getElementById("git-profile");
        let gitLink = document.getElementById("git-link");
        let bio = document.getElementById("bio");
        let repo = document.getElementById("repository");
        let followers = document.getElementById("followers");
        let following = document.getElementById("following");
        let location = document.getElementById("location");
        let twitter = document.getElementById("twitter");
        let blog = document.getElementById("blog");
        let company = document.getElementById("company");

        name.innerHTML = data.name || data.login;

        gitProfile.href = data.html_url;
        gitProfile.innerHTML = `<img src='${data.avatar_url}' alt='user image' '>`

        gitLink.href = data.html_url;
        gitLink.innerHTML = "@" + data.login;

        bio.innerHTML = "bio: " + data.bio;
        if (data.bio === null) {
          bio.innerHTML = "bio: not available"
        }

        repo.innerHTML = data.public_repos;

        followers.innerHTML = data.followers;

        following.innerHTML = data.following;

        location.innerHTML = " " + data.location;
        if (data.location === null) {
          location.innerHTML = " not available"
        }

        twitter.innerHTML = ' ' + data.twitter_username;
        if (data.twitter_username === null) {
          twitter.innerHTML = " not avilable"
        }

        blog.href = data.blog;
        if (data.blog === "" || null) {
          blog.innerHTML = "not available";
        }

        company.innerHTML = ' ' + data.company;
        if (data.company === null) {
          company.innerHTML = " not available"
        }
        

      }

    })
    .catch(document.getElementById("profile-card").style.display = "none")
  search.value = "";
})

