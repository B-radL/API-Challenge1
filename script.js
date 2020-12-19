let mainSection = document.getElementById("main");
let pullArticle = document.getElementById("getSpaceX");
let fairSection = document.getElementById("fairings");
let getReddit = document.getElementById("reddit");
let getImage = document.getElementById("flickr");
let nextLaunch = document.getElementById("launchpad");
// console.log("Hello");

const getLatest = () => {
  fetch("https://api.spacexdata.com/v4/launches/latest")
    .then((response) => response.json())
    .then((data) => {
      // displayLatest(data.results[0]);
      console.log(data.links);
      pullArticle.addEventListener("click", (event) => {
        location.href = data.links.wikipedia; // This could drill into more articles
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
getLatest();
