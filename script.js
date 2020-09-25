const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select stream location
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log('Something went wrong ', error);
    }
}

// click start to go right to picture in picture
button.addEventListener('click', async () => {
    // stop button from starting another
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

selectMediaStream();