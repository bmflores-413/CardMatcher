import { CreditCard, IncomeThresholdType, Occupation } from "./types";

export const STUDENT_LIFE: CreditCard = {
    name: "Student Life",
    apr: 0.189,
    balanceTransferOfferDuration: 0,
    purchaseOffterDuration: 6,
    creditLimit: 1200,
    incomeEligibility: null,
    occupationEligibility: [Occupation.STUDENT],
    locationEligibility: null
}

export const ANYWHERE_CARD: CreditCard = {
    name: "Anywhere Card",
    apr: 0.339,
    balanceTransferOfferDuration: 0,
    purchaseOffterDuration: 0,
    creditLimit: 300,
    incomeEligibility: null,
    occupationEligibility: null,
    locationEligibility: null
}

export const LIQUID_CARD: CreditCard = {
    name: "Liquid Card",
    apr: 0.339,
    balanceTransferOfferDuration: 12,
    purchaseOffterDuration: 6,
    creditLimit: 3000,
    incomeEligibility: {
        amount: 16000,
        type: IncomeThresholdType.FLOOR,
    },
    occupationEligibility: null,
    locationEligibility: null
}

export const SAMPLE_CARDS: CreditCard[] = [STUDENT_LIFE, ANYWHERE_CARD, LIQUID_CARD] 