function clearQRCode() {
  let website = document.getElementById("website").value;
  if (!website) {
    alert("O campo de URL já está vazio!");
  } else {
    document.getElementById("website").value = "";
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode-2").innerHTML = "";
    document.getElementById("qrcode-container").style.display = "none";
  }
}

function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    /*Estilizado*/
    let qrcodeContainer2 = document.getElementById("qrcode-2");
    qrcodeContainer2.innerHTML = "";
    new QRCode(qrcodeContainer2, {
      text: website,
      width: 128,
      height: 128,
      colorDark: "#5868bf",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    document.getElementById("qrcode-container").style.display = "block";
    return website; // Retorna a variável website
  } else {
    alert("Por favor, insira uma URL válida");
  }
}

function downloadQRCode(website) {
  let qrcodeContainer = document.getElementById("qrcode");
  let imgData = qrcodeContainer.querySelector("img").src;
  let downloadLink = document.createElement("a");
  if (!website) {
    alert("Gere um QR code para fazer download!");
  } else {
    downloadLink.href = imgData;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
