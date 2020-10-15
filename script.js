AOS.init({
    duration: 1000,
    once: true
})

document.getElementById('hire-now').addEventListener('click', () => {
    _gs('event', 'Hire button clicked')
    window.open('https://freelancer.com/u/aryanbeezadhur')
})