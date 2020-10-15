AOS.init({
    duration: 1000,
    once: true
})

document.getElementById('hire-now').addEventListener('click', () => {
    window.open('https://freelancer.com/u/aryanbeezadhur')
})

document.getElementsByClassName('gs4')[0].outerHTML = `<img class="gs4" src="assets/message.svg" />`