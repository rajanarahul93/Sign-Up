const element = document.querySelector("lord-icon");
element.addEventListener("ready", () => {
    element.playerInstance.play();
});
element.addEventListener("complete", () => {
    element.playerInstance.direction *= -1;
    element.playerInstance.play();
});