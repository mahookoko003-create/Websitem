function downloadVideo() {
    const videoUrl = document.getElementById('youtubeUrl').value.trim();
    const format = document.getElementById('downloadFormat').value;
    const resultArea = document.getElementById('resultArea');

    if (!videoUrl) {
        alert("Lütfen bir YouTube linki girin!");
        return;
    }

    // Link ne olursa olsun içindeki 11 haneli Video ID'sini çeker
    let videoId = "";
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);

    if (match && match[1].length === 11) {
        videoId = match[1];
    } else {
        alert("YouTube linki anlaşılamadı. Lütfen linki tam kopyaladığınızdan emin olun.");
        return;
    }

    // YENİ VE REKLAMSIZ GÜVENLİ İNDİRME MOTORU
    resultArea.innerHTML = `
        <div style="margin-top: 20px; text-align: center;">
            <p style="color: #ccc; margin-bottom: 10px; font-size: 14px;">Dosyanız hazırlanıyor, lütfen aşağıdaki butona tıklayın:</p>
            <iframe src="https://button.yt2mp3.cc/?v=${videoId}&f=${format}&bg=101010&b_color=00e676&text_color=ffffff" 
                    style="width: 100%; height: 60px; border: none; overflow: hidden;" 
                    scrolling="no">
            </iframe
        </div>
    `;
}
