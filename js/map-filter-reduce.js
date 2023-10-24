"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const languageFilter = users.filter(user => user.languages.length >= 3);
console.log(languageFilter);

const userEmails = users.map(email => email.email);
console.log(userEmails);

function averageOfExperience(yearsOfExperience, currentYear){
    return yearsOfExperience + currentYear.yearsOfExperience / users.length;
}
const averageExperience = users.reduce(averageOfExperience, 0);
console.log(averageExperience);

function gitLongestUser(currentLongestEmail, currentEmail){
    if(currentEmail.length > currentLongestEmail.length){
        return currentEmail;
    }
    return currentLongestEmail;
}

const longestEmail = userEmails.reduce(gitLongestUser, users[0].email);
console.log(longestEmail);

const instructorsIntro = 'Your instructors are:'
function listOfNames(listOfNames, currentName){
    const instructorsIntro = 'Your instructors are:'
    return listOfNames + ', ' + currentName.name;
}

const userIntro = instructorsIntro + " " + users.reduce(listOfNames, users[0].name) + ".";
console.log(userIntro)

function listOfLanguages(setSoFar, user){
    setSoFar.add(user.languages)
}
const listOfKnownLanguages = users.reduce(listOfLanguages, users[0].languages);
console.log(listOfKnownLanguages)