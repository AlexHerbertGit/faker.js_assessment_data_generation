const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

// Variables to set data type that is being used for each key-value pair.
const randomUserId = faker.string.uuid();
const randomName = faker.person.fullName(); 
const randomGender = faker.person.gender();
const randomEmail = faker.internet.email(); 
const randomBirthDate = faker.date.birthdate();
const randomPhone = faker.phone.imei();
const randomJob = faker.person.jobTitle();

// Sets amount of profiles to generate.
let userAmount = 10;

//Function that generates and populates these keys with values.
function generateUserProfile() {
    return {
    'id': randomUserId,
    'name': randomName,
    'gender': randomGender,
    'email': randomEmail,
    'dob': randomBirthDate,
    'phone': randomPhone,
    'job': randomJob,
    };
};

//Function to generate multiple profiles and populate an array.

function generateRandomProfiles(count) {
    const userProfiles = [];

    for (let i = 0; i < count; i++) {
        const userProfile = generateUserProfile();
        userProfiles.push(userProfile);
    }
    return userProfiles;
};

const profiles = generateRandomProfiles(userAmount);
console.log(profiles);

