export default function handler(request, response) {

    fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/PIN${pinEl.value}.json`)
    .then(data => data.json())
    .then(json => response.json(json))
}

