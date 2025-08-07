function loadTime() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#image');
    var date = new Date();
    var hour = date.getHours();
    var section = document.querySelector('section');
    //var hour = (test)

    msg.innerHTML = `It is now ${hour} o'clock.`;

    if (hour >= 0 && hour < 12) {
        // GOOD MORNING!
        msg.innerHTML += '<p>Good morning!</p>';
        img.src = 'morning.png';
        document.body.style.background = '#86c8fe';
        //section.style.backgroundColor = '#86c8feff';
    } else if (hour >= 12 && hour < 18) {
        // GOOD AFTERNOON!
        msg.innerHTML += '<p>Good afternoon!</p>';
        img.src = 'afternoon.png';
        document.body.style.background = '#e9be8e';
        //section.style.backgroundColor = '#e9be8e';
    } else {
        // GOOD EVENING!
        msg.innerHTML += '<p>Good evening!</p>';
        img.src = 'night.png';
        document.body.style.background = '#17283b';
        //section.style.backgroundColor = '#17283b';
    }
}
