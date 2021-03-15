export default (TASK) => {
    return fetch(`http://localhost:4006/${TASK}`)
        .then(response => Promise.all([response, response.json()]))
}




