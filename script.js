function downloadVideo() {
    const videoUrl = document.getElementById('youtubeUrl').value.trim();
    const format = document.getElementById('downloadFormat').value;
    const resultArea = document.getElementById('resultArea');

    if (!videoUrl) {
        alert("Lütfen bir YouTube linki girin!");
        return;
    }

    // En gelişmiş YouTube ID yakalayıcı (Shorts, Mobil, Bilgisayar linkleri dahil)
    let videoId = "";
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);

    if (match && match[1].length === 11) {
        videoId = match[1];
    } else {
        alert("YouTube linki anlaşılamadı. Lütfen linki tam kopyaladığınızdan emin olun.");
        return;
    }

    // Daha stabil çalışan alternatif ve ücretsiz bir indirme API'si
    // Kullanıcı butona bastığında güvenli bir indirme butonu render eder
    resultArea.innerHTML = `<iframe src="https://convert2mp3s.com/api/widget?url=https://www.youtube.com/watch?v=${videoId}&format=${format}" style="width: 100%; height: 60px; border: none; margin-top: 15px; border-radius: 4px;" scrolling="no"></iframe>`;
}
