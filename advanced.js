// Image Carousel Logic
const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1043/600/400"
];

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");

function showImage(index) {
  carouselImg.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// API Fetch Logic
function fetchJoke() {
  const jokeOutput = document.getElementById("joke-output");
  jokeOutput.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeOutput.textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      jokeOutput.textContent = "Failed to load joke. Try again.";
      console.error("Error fetching joke:", error);
    });
}
