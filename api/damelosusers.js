export default function handler(request, response) {


    fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/`)
    .then(eljsonperocomstring => {
        console.log("HOLAAAA")
        response.send(eljsonperocomstring);
    })
}

