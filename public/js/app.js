console.log('fetching data');
//

const form = document.querySelector('form');
const search = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    console.log(`testing ${location}`);

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});
});