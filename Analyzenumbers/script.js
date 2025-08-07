let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let res = document.querySelector('div#res');
let values = [];

function isNumber(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inList(n, l) {
  return l.indexOf(Number(n)) != -1;
}

function add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Value ${num.value} added`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Invalid value or already added to the list');
    }
    num.value = '';
    num.focus();
}

function finish() {
    if (values.length == 0) {
        window.alert('Add values before finishing!');
    } else {
        let total = values.length;
        let highest = values[0];
        let lowest = values[0];
        let sum = 0;
        let average = 0;
        for (let pos in values) {
            sum += values[pos];
            if (values[pos] > highest)
                highest = values[pos];
            if (values[pos] < lowest)
                lowest = values[pos];
        }
        average = sum / total;
        res.innerHTML = '';
        res.innerHTML += `<p>In total we have ${total} numbers added.</p>`;
        res.innerHTML += `<p>The highest value is ${highest}.</p>`;
        res.innerHTML += `<p>The lowest value is ${lowest}.</p>`;
        res.innerHTML += `<p>The sum of all values is ${sum}.</p>`;
        res.innerHTML += `<p>The average of the values is ${average}.</p>`;
    }
}
