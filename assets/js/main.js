imagesArray = [
    'https://cdn.pixabay.com/photo/2019/07/06/18/17/radio-4320926_1280.jpg',
    'https://www.shutterstock.com/image-photo/professional-microphone-sound-mixer-radio-600nw-1948354897.jpg',
    'https://live365.com/img/broadcaster/pillarGuide/chapter-2-1.jpg',
    'https://www.shutterstock.com/image-photo/background-radio-station-podcasters-professional-260nw-443635471.jpg',
    'https://www.shutterstock.com/image-photo/professional-microphone-headphones-radio-station-600nw-2411760711.jpg'
    ]
    
    document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".image-container");
    countImg = 0;
    
    const nextImg = (() => {
        img.innerHTML = `<img src="${imagesArray[countImg]}" alt="Portada"></img>`;
        countImg = (countImg + 1) % imagesArray.length;
    })
    
    nextImg();
    setInterval(nextImg, 10000);

    document.addEventListener('DOMContentLoaded', function () {
        const audio = document.getElementById('audio');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const stopBtn = document.getElementById('stopBtn');
        const volumeControl = document.createElement('input');

        volumeControl.type = 'range';
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.1;
        volumeControl.value = audio.volume;
        volumeControl.id = 'volumeControl';

        const audioContainer = document.querySelector('.audio-container');
        audioContainer.appendChild(volumeControl);

        playPauseBtn.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = 'Pausar';
            } else {
                audio.pause();
                playPauseBtn.textContent = 'Escuchar';
            }
        });

        stopBtn.addEventListener('click', function () {
            audio.pause();
            audio.currentTime = 0;
            playPauseBtn.textContent = 'Escuchar';
        });

        volumeControl.addEventListener('input', function () {
            audio.volume = volumeControl.value;
        });

        audio.addEventListener('volumechange', function () {
            volumeControl.value = audio.volume;
        });
    });
})
    