import { UserContext } from "../../Contexts/UserContext";
import { useContext, useState } from "react";
import { PageLayout } from '../PageLayout';
import { CreditCard } from '../../types';
import { MatchesListItem } from './MatchesListItem'
import { addCard, removeCard } from './utils';
import { useHistory } from "react-router";
import { Card, Button } from '../../Components'
import styles from './UserCardMatches.module.scss';

const PAGE_TITLE = 'You are eligible for the following cards'

export const UserCardMatches = () => {
  const history = useHistory();

  const {userCardMatches, user} = useContext(UserContext);
  const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);

  const onCardSelected = (card: CreditCard, checkedStatus: boolean) => {
    checkedStatus ? setSelectedCards(addCard(card, selectedCards)) : setSelectedCards(removeCard(card, selectedCards));
  }

  const onClickViewSelectedCards = () => {
    history.push({pathname: '/compare', state: {selectedCards}})
  }

  return (
    <PageLayout>
      <Card title={PAGE_TITLE}>
        <ul className={styles.matchesList}>
          {userCardMatches.map((card)=><MatchesListItem card={card} onCardSelected={onCardSelected} key={card.name}/>)}
        </ul>
        <Button onClick={onClickViewSelectedCards}>View Selected Cards</Button>
      </Card>
    </PageLayout>
  )
}