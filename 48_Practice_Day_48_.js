// Real Life Use Case Of Try......Finally keyword 


function parseJSON(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return "Invalid JSON!";
    }
}

console.log(parseJSON('{"name": "Kshitij"}')); // valid
console.log(parseJSON('invalid json')); // error handled
