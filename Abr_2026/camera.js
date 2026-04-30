const video = document.querySelector("#camera");
const btn = document.querySelector("#btn");
const btnClose = document.querySelector("#btnClose");

btn.addEventListener("click", async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = stream;
})

btnClose.addEventListener("click", () => {
    const stream = video.srcObject;

    if (stream) {
        const tracks = stream.getTracks();

        tracks.forEach((track) => track.stop());

        video.srcObject = null;
    }
})