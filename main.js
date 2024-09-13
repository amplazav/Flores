onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', (event) => {
        const audio = document.getElementById('miCancion');
        audio.play().catch(error => {
            console.log('No se pudo reproducir el audio automáticamente. El usuario puede iniciar la reproducción.');
        });
    });
