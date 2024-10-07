const logo = document.getElementById('terminal');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const xPos = (clientX / window.innerWidth) * 20 - 10;
    const yPos = (clientY / window.innerHeight) * 20 - 10;

    logo.style.transform = `translate(${xPos}px, ${yPos}px)`;
});