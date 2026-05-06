const videoInput = document.getElementById("videoUpload");
const videoPlayer = document.getElementById("festivalVideo");
const videoStatus = document.getElementById("videoStatus");

let currentObjectUrl = null;

function setStatus(message, isError = false) {
  videoStatus.textContent = message;
  videoStatus.style.color = isError ? "#ffb3b3" : "";
}

function loadVideoFile(file) {
  if (!file) {
    setStatus("No trailer selected yet.");
    return;
  }

  if (!file.type.startsWith("video/")) {
    setStatus("Please choose a valid trailer file.", true);
    return;
  }

  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
  }

  currentObjectUrl = URL.createObjectURL(file);
  videoPlayer.src = currentObjectUrl;
  videoPlayer.load();
  setStatus(`Trailer loaded: ${file.name}`);
}

videoInput?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  loadVideoFile(file);
});

window.addEventListener("beforeunload", () => {
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
  }
});
