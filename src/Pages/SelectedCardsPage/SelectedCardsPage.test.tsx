import { render, within } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ANYWHERE_CARD, LIQUID_CARD } from '../../sampleCards';
import { SelectedCardsPage } from './SelectedCardsPage';

describe('User details form', ()=>{
  const history = createMemoryHistory();
  const locationState = { selectedCards: [ANYWHERE_CARD, LIQUID_CARD] }
  history.push("/compare", locationState);

  const setupTest = () => {
    return (render(
      <Router history={history}>
        <SelectedCardsPage />
      </Router>));
  } 
  describe('Renders the cards', ()=>{
    it('Renders each card`s details', ()=>{
      const { getAllByTestId, getAllByText } = setupTest();
      const cards = getAllByTestId('ui-card');
      expect(cards).toHaveLength(2);

      expect(getAllByText('Apr:')).toHaveLength(2);
      expect(getAllByText('Balance Transfer Offer Duration:')).toHaveLength(2);
      expect(getAllByText('Purchase Offer Duration:')).toHaveLength(2);
      expect(getAllByText('Credit Available:')).toHaveLength(2);
      
      expect(within(cards[0]).getByText('Anywhere Card')).toBeInTheDocument();
      expect(within(cards[0]).getByText('33.9%')).toBeInTheDocument();
      expect(within(cards[0]).getAllByText('0 months')).toHaveLength(2);
      expect(within(cards[0]).getByText('£300')).toBeInTheDocument();

      expect(within(cards[1]).getByText('Liquid Card')).toBeInTheDocument();
      expect(within(cards[1]).getByText('33.9%')).toBeInTheDocument();
      expect(within(cards[1]).getByText('6 months')).toBeInTheDocument();
      expect(within(cards[1]).getByText('12 months')).toBeInTheDocument();
      expect(within(cards[1]).getByText('£3000')).toBeInTheDocument();
    });
  });
})