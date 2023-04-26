const english = {
    level: "upper-intermediate",
    groups: 5,
    teacher: "Mia Nick"

}

function propsCount(currentObject){
    return Object.keys(currentObject).length
}

console.log(propsCount(english));