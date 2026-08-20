"use strict";
function getAgeRatingAccess(age) {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age >= 7 && age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age >= 13 && age <= 16) {
        return "T (Teen)";
    }
    else {
        return "M (Mature)";
    }
}
const Rahim = getAgeRatingAccess(5);
const ahim = getAgeRatingAccess(12);
const him = getAgeRatingAccess(16);
console.log(Rahim);
console.log(ahim);
console.log(him);
