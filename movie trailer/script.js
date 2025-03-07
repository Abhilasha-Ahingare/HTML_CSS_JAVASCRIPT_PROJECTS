// Get the button element
const watchingButton = document.getElementById("btn");

// Add event listener to the button
watchingButton.addEventListener("click", () => {
  // Create a new video element
  const newVideo = document.createElement("video");

  // Set video source
  newVideo.src =
    "./images/Disney’s Maleficent Mistress of Evil  Official Trailer - Walt Disney Studios Philippines (720p, h264).mp4";

  // Set video controls and autoplay
  newVideo.controls = true;
  newVideo.autoplay = true;

  // Set video dimensions
  newVideo.width = 834;
  newVideo.height = 440;

  // Hide the container element
  document.querySelector(".container").style.display = "none";

  // Append the video element to the body
  document.body.appendChild(newVideo);
});
