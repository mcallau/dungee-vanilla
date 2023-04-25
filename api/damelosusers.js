export default function handler(request, response) {


    fetch(`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins.json`,{
        method: "GET"
    })
    .then(eljsonperocomstring => {
       
        response.send(eljsonperocomstring);
    })
}

