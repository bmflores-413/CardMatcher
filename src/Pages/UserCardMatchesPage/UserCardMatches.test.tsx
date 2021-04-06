import { fireEvent, render, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { UserContext } from '../../Contexts/UserContext';
import { CreditCard } from '../../types';
import { UserCardMatches } from './UserCardMatches';
import { SAMPLE_CARDS } from '../../sampleCards';

describe('User details form', ()=>{
  const history = createMemoryHistory();
  const setupTest = (matches?: CreditCard[]) => {
    return ({
      ...render(
        <Router history={history}>
          <UserContext.Provider value={{onSetUser: jest.fn(), user: null, userCardMatches: matches || SAMPLE_CARDS}}>
            <UserCardMatches />
          </UserContext.Provider>
        </Router>), 
      history,
    });
  } 
  describe('Renders the page', ()=>{
    it('Renders the name inputs', ()=>{
      const { getByText } = setupTest();
      expect(getByText('You are eligible for the following cards')).toBeInTheDocument();
    });
    describe('Lists the matches', ()=>{
      it('Three Matches', ()=>{
        const { getByText, getAllByRole } = setupTest();
        expect(getByText('Student Life')).toBeInTheDocument();
        expect(getByText('Anywhere Card')).toBeInTheDocument();
        expect(getByText('Liquid Card')).toBeInTheDocument();
        expect(getAllByRole('checkbox')).toHaveLength(3)
      })
      it('One Match', ()=>{
        const { getByText, getAllByRole } = setupTest([SAMPLE_CARDS[1]]);
        expect(getByText('Anywhere Card')).toBeInTheDocument();
        expect(getAllByRole('checkbox')).toHaveLength(1)
      })
    })
  });
  describe('Navigates to the selected matches page with the chosen cards', ()=>{
    it('Saves the correct user datails', async ()=>{
      const { getByRole, getAllByRole, history } = setupTest();
      const checkboxes = getAllByRole('checkbox');
      fireEvent.click(checkboxes[0]);
      fireEvent.click(checkboxes[2]);
      fireEvent.click(checkboxes[0]);
      fireEvent.click(getByRole('button', {name: 'View Selected Cards'}));
      await waitFor(()=>expect(history.location.pathname).toEqual('/compare'));
      await waitFor(()=>expect(history.location.state).toEqual({selectedCards: [SAMPLE_CARDS[2]]}));
    })
  })
})