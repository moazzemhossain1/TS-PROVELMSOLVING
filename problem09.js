"use strict";
const ProesesTranjection = (blance, tranjection) => {
    if (tranjection.type === "deposit") {
        return blance + tranjection.amount;
    }
    if (tranjection.type === "widero") {
        if (tranjection.amount > blance) {
            return "Inficient";
        }
    }
    return blance - tranjection.amount;
};
const rahim = ProesesTranjection(5000, { type: "widero", amount: 27000 });
console.log(rahim);
