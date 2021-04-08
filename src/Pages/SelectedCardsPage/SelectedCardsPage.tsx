import { CreditCardDetails } from './Card/Card'
import { PageLayout } from '../PageLayout';
import { CreditCard } from '../../types';
import { useHistory } from 'react-router';
import styles from './SelectedCardsPage.module.scss'

export const SelectedCardsPage = () => {
  const history = useHistory();
  const selectedCards = (history.location.state as {selectedCards: CreditCard[]}).selectedCards;
  const totalCredit = selectedCards.reduce<number>((total, currentCard)=>{return total + currentCard.creditLimit},0);
  return (
    <PageLayout title={'Here are the cards you selected'}>
      {(selectedCards || []).map((card)=><CreditCardDetails card={card} key={card.name}></CreditCardDetails>)}
      <div className={styles.totalCredit}>
        <h3>Total Credit: £{totalCredit}</h3>
      </div>
    </PageLayout>
  )
}