const fftSize = 8192;

const minFrequency = 20;
const maxFrequency = 24000;

const width = 300;
const height = 300;

const init = async() => {
    const audioContext = new AudioContext();
    const sample = audioContext.sampleRate;
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = fftSize;
    const bufferSize = analyser.frequencyBinCount;
    const buffer = new Uint8Array(bufferSize);

    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const input = audioContext.createMediaStreamSource(stream);
    input.connect(analyser);

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const minFrequencyIndex = Math.trunc(minFrequency / sample * bufferSize);
    const maxFrequencyIndex = Math.trunc(maxFrequency / sample * bufferSize);

    const tick = () => {
        requestAnimationFrame(tick);
        analyser.getByteFrequencyData(buffer);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        for(let i = minFrequencyIndex; i < maxFrequencyIndex; i++) {
            const h = buffer[i] / 256 * height;
            const x = (i - minFrequencyIndex) / (maxFrequencyIndex - minFrequencyIndex) * width;
            ctx.fillStyle = '#f00';
            ctx.fillRect(x, height - h, 2, h);
        }
    };
    tick();
}

window.onload = () => {
    document.getElementById("start").onclick = () => {
        init();
    }
}