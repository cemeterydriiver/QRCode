new QRCode(document.getElementById('qrcode'), {
    text: 'https://github.com/cemeterydriiver',
    width: 300,
    height: 300,
    colorDark: '#ff0000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
  