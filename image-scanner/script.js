const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Ativar câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => { video.srcObject = stream; })
    .catch(err => { console.error("Erro ao acessar a câmera:", err); });

function tirarFoto() {
    // Captura a imagem do vídeo
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Converte para formato base64
    let imagemCapturada = canvas.toDataURL("image/png");

    // URL da imagem de referência (substitua pela sua)
    let imagemReferencia = "imagem-referencia.png"; 

    compararImagens(imagemCapturada, imagemReferencia);
}

function compararImagens(imagem1, imagem2) {
    // Simples comparação de string (para algo mais preciso, usar IA ou bibliotecas de processamento de imagem)
    if (imagem1.includes(imagem2)) {
        alert("Imagem reconhecida! Redirecionando...");
        window.location.href = "https://seu-link-destino.com";
    } else {
        alert("Imagem não reconhecida. Tente novamente.");
    }
}
