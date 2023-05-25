export function fetchUsuarios(pin){
    return fetch(`/api/damelosusers?pin=${pin}`).then(datos => datos.json())
}

export function fetchPreguntas(){
    return fetch(`/api/damelasquestions`).then(preguntitas => preguntitas.json())
}

export function updatePreguntaActual(i, pin){
    fetch (`https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"value": ${i}}`
    });
}

export function addUser(pin, nom){
    return fetch (`https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users.json`, {
            method: 'POST',
            body: `{"name": "${nom}" }`
    }).then(data => data.json());
}

export function getPreguntaActual(pin){
    return fetch(`https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`)
        .then(data => data.json())
}


export function updateRespuesta(pin, id, preguntaActual, respuesta){
    fetch (`https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users/${userid}/respuesta${preguntaActual}.json`, {
        method: 'PUT',
        body: `{"value": "${nom}" }`
});


}