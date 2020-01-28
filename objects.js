// const person = {
//     name: "Georgia",
//     gender: "Female",
//     age: 21,
//     pets: true,
//     breed: "staffordshire Bull Terrier",
//     legs: 4,
//     sayHi(){
//         return `Hello my name is ${this.name}`
//     }
// }
// console.log(person.sayHi())

const Pet = {
    name: "Silvia",
    typeOfpet: "Giraffe",
    age: "7",
    colour: "Multi",
    energy: "40",
    toiletBreak: false,
    health: "Good",
    Death: "10",
    faveFood: "Curry",
    hunger: 40,
    genderPronoun: "she",
    eat(){
        if(this.hunger <30) {
            return `${this.name} is hungry. Feed ${this.genderPronoun} ${this.faveFood}`
        }
        else{
            return`${this.name} is not hungry.`
        }
    },
    lifeSpan(){
        if(this.age <5){
            return`${this.name} is not yet ready for death`
        }
        else{
            return`${this.name} is currently coffin dodging, please look ofter your ${this.typeOfpet}`
        }
    },
    pooBreak(){
        if(this.toiletBreak == true){
            return`QUICK!! Let ${this.name} out, ${this.genderPronoun} needs the toilet!`
        }
        else{
            return`${this.name} is ok for the toilet right now.`
        }
    },
    playTime(){
        if(this.energy >50) {
            return`Take ${this.name} out before ${this.genderPronoun} goes crazy!`
        }
        else{
            return `${this.name} does not want to play right now.`
        }
    }

}

console.log(Pet.eat())
console.log(Pet.lifeSpan())
console.log(Pet.pooBreak())
console.log(Pet.playTime())

// console.log(person.name)
// console.log(person.pets)

// person.faveSongs = ["Sultans of Swing", 
// "You can call me Al", 
// "September.", 
// "Critisize"]
// console.log(person.faveSongs)




// let dayOfWeek = "Tuesday"
// let alarm1

// const alarm = {
//     weekendAlarm: "No alarm needed.",
//     weekDayAlarm: "6am will be your get up time.",
// }

// const whatDay = (dayOfWeek) => {
//     if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday"){
//         console.log(alarm.weekDayAlarm)
//     }
//     else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday"){
//         console.log(alarm.weekendAlarm)
//     }
//     else{
//         console.log("Please enter a valid day of the week.")
//     }

// }
// whatDay("Saturday")
// whatDay("Monday")
// whatDay("Monday")
// whatDay("sat")
// whatDay("Monday"
