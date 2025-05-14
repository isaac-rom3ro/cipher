document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("qrcode")

        const destinyUrl = window.location.origin + window.location.pathname.replace("final-decryption.html", "")+ "joke.html";

        new QRCode(container, {
            text: destinyUrl, 
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
})
