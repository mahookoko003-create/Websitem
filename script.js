function downloadVideo() {
    const videoUrl = document.getElementById('youtubeUrl').value;
    const format = document.getElementById('downloadFormat').value;
    const resultArea = document.getElementById('resultArea');

    if (!videoUrl) {
        alert("Lütfen geçerli bir YouTube linki girin!");
        return;
    }

    // YouTube Video ID'sini linkten ayıklama
    let videoId = "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);

    if (match && match[2].length == 11) {
        videoId = match[2];
    } else {
        alert("YouTube linki çözülemedi. Lütfen linki kontrol edin.");
        return;
    }

    // Ücretsiz ve reklamsız çalışan iframe indirme API servisi
    // Format mp3 ise ses, mp4 ise video indirme penceresi açar
    resultArea.innerHTML = `<iframe src="https://twostem.com/button/?v=${videoId}&f=${format}" scrolling="no"></iframe>`;
}
