function check() {
    var today = new Date();
    var year = today.getFullYear();
    var fyear = document.getElementById('txtyear');
    var res = document.querySelector('div#res');

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Please check the data and try again!');
    } else {
        var fgender = document.getElementsByName('radgender');
        var age = year - Number(fyear.value);
        var gender = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if (!fgender[0].checked && !fgender[1].checked) {
            window.alert('[ERROR] Please select the gender!');
            fyear.value = '';
            fyear.focus();
            return;
        }

        if (fgender[0].checked) {  // Male
            gender = 'Man';
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'boychild.png');
            } else if (age < 21) {
                img.setAttribute('src', 'youngmale.png');
            } else if (age < 50) {
                img.setAttribute('src', 'adultman.png');
            } else {
                img.setAttribute('src', 'elderlyman.png');
            }
        } else if (fgender[1].checked) {  // Female
            gender = 'Woman';
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'girlchild.png');
            } else if (age < 21) {
                img.setAttribute('src', 'youngfemale.png');
            } else if (age < 50) {
                img.setAttribute('src', 'adultwoman.png');
            } else {
                img.setAttribute('src', 'elderlywoman.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `We detected a ${gender} who is ${age} years old.`;
        res.appendChild(img);
    }
}
