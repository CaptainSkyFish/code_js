const unsplashAccessKey = "ISlew7jj5ocz5LUSeD3i8WJqJQuhz6YJ95p2kwh2zB4";

const button = document.getElementById("change-bg");
const body = document.body;

async function getRandomPhoto() {
  const url = `https://api.unsplash.com/photos/random?client_id=${unsplashAccessKey}`;
  return fetch(url).then((response) => {response.json()});
}

function setBackground(photoData) {
  const imageUrl = photoData.urls.regular;
  body.style.backgroundImage = `url(${imageUrl})`;
}

button.addEventListener("click", async () => {
  await getRandomPhoto()
    .then(setBackground)
    .catch((error) => console.error("Error fetching photo:", error));
});
