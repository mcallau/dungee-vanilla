export default function handler(request, response) {

    const { pin } = request.query; 
    fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins${pin}.json`)
    .then(data => data.json())
    .then(json => response.json(json))
}

