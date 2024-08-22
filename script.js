function adjustButtonText() {
  const button = document.getElementById("shareButton");
  if (window.innerWidth <= 600) {
    button.innerText = "Share This Page";
  } else {
    button.innerText = "Share";
  }
}

async function sharePage() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: "Check out this page!",
        url: window.location.href,
      });
      console.log("Page shared successfully");
    } catch (error) {
      console.error("Error sharing the page:", error);
    }
  } else {
    alert(
      "Share not supported on this browser. Copy the link: " +
        window.location.href
    );
  }
}

// Event listeners
window.addEventListener("resize", adjustButtonText);
window.addEventListener("load", adjustButtonText);
document.getElementById("shareButton").addEventListener("click", sharePage);
