function downloadVideo() {

    const videoUrl = document.getElementById('youtubeUrl').value.trim();
    const format = document.getElementById('downloadFormat').value;

    if (!videoUrl) {
        alert("YouTube linki gir");
        return;
    }

    let videoId = "";

    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    const match = videoUrl.match(regExp);

    if (match && match[1].length === 11) {
        videoId = match[1];
    } else {
        alert("Geçersiz YouTube linki");
        return;
    }

    // MP3
    if (format === "mp3") {

        window.open(
            `https://yt2mp3.cc/en13/${videoId}/`,
            "_blank"
        );

    }

    // MP4
    if (format === "mp4") {

        window.open(
            `https://ssyoutube.com/watch?v=${videoId}`,
            "_blank"
        );

    }

}
