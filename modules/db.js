export function fetchUsuarios(){
    return fetch(`/api/damelosusers?pin=${pin}`).then(datos => datos.json())
}

export function fetchPreguntas(){
    return fetch(`/api/damelasquestions`).then(preguntitas => preguntitas.json())
}

export function updatePreguntaActual(i){
    fetch (`https://dungee-1c560-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}.json`, {
        method: 'PUT',
        body: `{"pregunta": ${i}}`
    });
}