document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementsByClassName("trigger");
    const audio = document.getElementById("activeAudio");

    playButton.addEventListener("mousedown", function() {
        audio.play();
    });

    playButton.addEventListener("mouseup", function() {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });

    playButton.addEventListener("mouseleave", function() {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning if the mouse leaves the button
    });
});