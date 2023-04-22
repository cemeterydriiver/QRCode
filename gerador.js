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
        } else {
          alert("Por favor, insira uma URL válida");
        }
      }