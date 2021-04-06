import {CreditCardDetails} from './Card/Card'
import { PageLayout } from '../PageLayout';
import { CreditCard } from '../../types';
import { useHistory } from 'react-router';

export const SelectedCardsPage = () => {
  const history = useHistory();
  const selectedCards = (history.location.state as {selectedCards: CreditCard[]}).selectedCards;
  const totalCredit = selectedCards.reduce<number>((total, currentCard)=>{return total + currentCard.creditLimit},0);
  return (
    <PageLayout>
      {(selectedCards || []).map((card)=><CreditCardDetails card={card} key={card.name}></CreditCardDetails>)}
      <div>Total Credit: £{totalCredit}</div>
    </PageLayout>)
}