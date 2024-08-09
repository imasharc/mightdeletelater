function toggleIframe(id) {
  const iframeContainer = document.getElementById(id);
  if (
    iframeContainer.style.display === "none" ||
    iframeContainer.style.display === ""
  ) {
    iframeContainer.style.display = "block";
  } else {
    iframeContainer.style.display = "none";
  }
}
