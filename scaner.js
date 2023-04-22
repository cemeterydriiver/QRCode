const scannerVideo = document.getElementById('scanner-video');
const scannerCanvas = document.getElementById('scanner-canvas');
const scannerButton = document.getElementById('scanner-button');
const stopScanButton = document.getElementById('stop-scan-button');
const codeReader = new ZXing.BrowserMultiFormatReader();

let currentFacingMode = 'environment';

function startScanner() {
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: currentFacingMode 
        } 
    })
    .then(function (stream) {
        scannerVideo.srcObject = stream;
        scannerVideo.setAttribute('playsinline', true);
        scannerVideo.play();
        tick();
        scan();
    })
    .catch(function (err) {
        console.error('Não foi possível acessar a câmera', err);
    });
}

function tick() {
    scannerCanvas.width = scannerVideo.videoWidth;
    scannerCanvas.height = scannerVideo.videoHeight;
    scannerCanvas.getContext('2d').drawImage(scannerVideo, 0, 0, scannerCanvas.width, scannerCanvas.height);

    requestAnimationFrame(tick);
}

function scan() {
    codeReader.decodeFromCanvas(scannerCanvas, function (result, err) {
        if (result) {
            alert(result.text);
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err);
        }
        requestAnimationFrame(scan);
    })
}

scannerButton.addEventListener('click', function () {
    startScanner();
});

stopScanButton.addEventListener('click', function () {
    scannerVideo.srcObject.getTracks().forEach(track => track.stop());
    scannerCanvas.style.display = 'none';
    scannerButton.disabled = false;
    stopScanButton.disabled = true;
});

function switchCamera() {
    currentFacingMode = (currentFacingMode === 'environment') ? 'user' : 'environment';
    scannerVideo.srcObject.getTracks().forEach(track => track.stop());
    startScanner();
}

document.getElementById('switch-camera-button').addEventListener('click', function () {
    switchCamera();
});
