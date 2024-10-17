imagesArray = [
    'https://cdn.pixabay.com/photo/2019/07/06/18/17/radio-4320926_1280.jpg',
    'https://www.shutterstock.com/image-photo/professional-microphone-sound-mixer-radio-600nw-1948354897.jpg',
    'https://live365.com/img/broadcaster/pillarGuide/chapter-2-1.jpg',
    'https://www.unc.edu.ar/sites/default/files/medios_radio_TV_comunicacion-02.jpg',
    'https://www.shutterstock.com/image-photo/professional-microphone-headphones-radio-station-600nw-2411760711.jpg'
    ]
    
    document.addEventListener("DOMContentLoaded", () => {

    // Imagen de portada
    const img = document.querySelector(".image-container");
    countImg = 0;
    
    const nextImg = (() => {
        img.innerHTML = `<img src="${imagesArray[countImg]}" alt="Portada"></img>`;
        countImg = (countImg + 1) % imagesArray.length;
    })
    
    nextImg();
    setInterval(nextImg, 10000);

    // Botón programación
    const programacion = document.querySelector('#btn-programacion');
    const mainProgramacion = document.querySelector('.main__container');

    arrayProgramas = [
        {
            title: 'Patricio Flaherty',
            hours: 'Lunes a Viernes de 08:00 a 10:30hs.'
        },
        {
            title: 'La mañana de la radio',
            hours: 'Lunes a VIernes de 10:30 a 12:00hs.'
        },
        {
            title: 'Una copla en la llanura',
            hours: 'Lunes a Viernes de 12:00 a 14:00hs.'
        },
        {
            title: 'El retrovisor',
            hours: 'Lunes a Viernes de 14:00 a 16:00hs.'
        },
        {
            title: 'Nestor y la movida tropical',
            hours: 'Lunes a Viernes de 16:00 a 18:00hs.'
        },
        {
            title: 'Para que aprendas',
            hours: 'Lunes a Viernes de 18:00 a 20hs.'
        },
        {
            title: 'Conectados a la musica con Fabian Quintana',
            hours: 'Lunes a Viernes a partir de las 20hs.'
        },
        {
            title: 'Raices gauchas',
            hours: 'Miercoles a partir de las 21:00hs.'
        },
        {
            title: 'Razones para vivir',
            hours: 'Viernes de 17:00 a 19:00hs.'
        },
        {
            title: 'Kalelo Lugo y el bailantazo',
            hours: 'Sabados y domingos a partir de 18:00hs.'
        },
        {
            title: 'El baul de los recuerdos',
            hours: 'Domingo de 8:00 a 13:00hhs.'
        }
    ]

    const programacionProgramas = document.createElement('div');
    programacionProgramas.classList.add('programacion');

    arrayProgramas.forEach((programa) => {
        programacionProgramas.innerHTML += `
            <div class="programacion-programas">
            <h4>${programa.title}</h4>
            <p>${programa.hours}</p>
            <hr>
            </div>
        `;
    });

    let agregado = false;

    programacion.addEventListener('click', () => {
        if (agregado) {
            const programaElement = mainProgramacion.querySelector('.programacion');
            if (programaElement) {
                mainProgramacion.removeChild(programaElement);
            }
            agregado = false;
        } else {
            mainProgramacion.appendChild(programacionProgramas);
            agregado = true;
        }
    });
})
    

// Audio
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.querySelector('#audio');
    const playPauseBtn = document.querySelector('#playPauseBtn');
    const stopBtn = document.querySelector('#stopBtn');
    const volumeControl = document.querySelector('#volumeControl');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play().then(() => {
                playPauseBtn.textContent = 'Pausar';
            }).catch(error => {
                console.error('Error al intentar reproducir el audio:', error);
            });
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value;
    });

    audio.addEventListener('volumechange', function () {
        volumeControl.value = audio.volume;
    });
});
