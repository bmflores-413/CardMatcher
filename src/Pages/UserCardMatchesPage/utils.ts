import { CreditCard } from "../../types";

export const removeCard = (card: CreditCard, selectedCards: CreditCard[]): CreditCard[] => {
    const index = selectedCards.findIndex((currentCard)=>card===currentCard);
    const firstHalf = selectedCards.slice(0, index);
    const secondHalf = index === selectedCards.length - 1 ? [] : selectedCards.slice(index + 1);
    return firstHalf.concat(secondHalf);
}
  
export const addCard = (card: CreditCard, selectedCards: CreditCard[]): CreditCard[] => {
    return [...selectedCards, card];
}