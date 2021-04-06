import { CreditCard, IncomeThresholdType, User } from "../types";

const passesOccupationEligibility = ({user, card}: {user: User, card: CreditCard}) => {
    return user.occupation && (!card.occupationEligibility || card.occupationEligibility.includes(user.occupation))
}

const passesIncomeEligibility = ({user, card}: {user: User, card: CreditCard}): boolean => {
    switch (card.incomeEligibility?.type) {
        case IncomeThresholdType.CEILING:
            return user.annualIncome <= card.incomeEligibility.amount
        case IncomeThresholdType.FLOOR:
            return user.annualIncome >= card.incomeEligibility.amount
        default:
            return true
    }
}

const passesLocationEligibility = ({user, card}: {user: User, card: CreditCard}) => {
    return (!card.locationEligibility || card.locationEligibility.includes(user.address.postCode))
}

export const getCardMatches = ({user, allCards}: {user: User, allCards: CreditCard[]}) => {
    return allCards.filter((card)=>{
        return passesOccupationEligibility({user, card}) && passesIncomeEligibility({user, card}) && passesLocationEligibility({user, card})
    })
}