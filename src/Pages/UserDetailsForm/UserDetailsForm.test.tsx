import { fireEvent, render, within, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { UserDetailsForm } from './UserDetailsForm';
import { UserContext } from '../../Contexts/UserContext';
import { Occupation, UserTitle } from '../../types';
import selectEvent from 'react-select-event';

describe('User details form', ()=>{
  const history = createMemoryHistory();
  const setUserMock = jest.fn()
  const setupTest = () => {
    return ({
      ...render(
        <Router history={history}>
          <UserContext.Provider value={{onSetUser: setUserMock, user: null, userCardMatches: []}}>
            <UserDetailsForm />
          </UserContext.Provider>
        </Router>), 
      history,
      setUserMock,
    });
  }
  describe('Renders the form inputs', ()=>{
    it('Renders the name inputs', ()=>{
      const { getByText, getByTestId } = setupTest();
      expect(getByText('Title')).toBeInTheDocument();
      expect(getByText('First Name')).toBeInTheDocument();
      expect(getByText('Last Name')).toBeInTheDocument();
      expect(within(getByTestId('name-form-group')).getAllByRole('textbox')).toHaveLength(3);
    });
    it('Renders the datepicker', ()=>{
      const { getByText, getAllByPlaceholderText } = setupTest();
      expect(getByText('Date of Birth')).toBeInTheDocument();
      expect(getAllByPlaceholderText('--')).toHaveLength(2);
      expect(getAllByPlaceholderText('----')).toHaveLength(1);
    });
    it('Renders the address inputs', ()=>{
      const { getByText, getByTestId } = setupTest();
      expect(getByText('House Number')).toBeInTheDocument();
      expect(getByText('Postcode')).toBeInTheDocument();
      expect(within(getByTestId('address-form-group')).getAllByRole('textbox')).toHaveLength(2);
    });
    it('Renders the occupation inputs', ()=>{
      const { getByText, getByTestId } = setupTest();
      expect(getByText('Occupation')).toBeInTheDocument();
      expect(getByText('Annual Income')).toBeInTheDocument();
      expect(within(getByTestId('occupation-form-group')).getAllByRole('textbox')).toHaveLength(2);
    });
    it('Renders the submit button', ()=>{
      const { getByRole } = setupTest();
      expect(getByRole('button', {name: 'Submit'})).toBeInTheDocument();
    })
  });
  describe('Saving user details', ()=>{
    it('Saves the correct user datails', async ()=>{
      const {getByTestId, getAllByPlaceholderText, getByPlaceholderText, getByRole, setUserMock} = setupTest();
      const nameInputs = within(getByTestId('name-form-group')).getAllByRole('textbox');
      //Set name
      await selectEvent.select(nameInputs[0], "Dr");
      //fireEvent.change(nameInputs[0], {target: {value: UserTitle.DR}});
      fireEvent.change(nameInputs[1], {target: {value: 'Sue'}});
      fireEvent.change(nameInputs[2], {target: {value: 'Smith'}});
      //Set DOB
      fireEvent.change(getAllByPlaceholderText('--')[0], {target: {value: 11}});
      fireEvent.change(getAllByPlaceholderText('--')[0], {target: {value: 1}});
      fireEvent.change(getByPlaceholderText('----'), {target: {value: 1995}});
      //Set Address
      const addressInputs = within(getByTestId('address-form-group')).getAllByRole('textbox');
      fireEvent.change(addressInputs[0], {target: {value: 413}});
      fireEvent.change(addressInputs[1], {target: {value: '123 456'}});
      //Set Occupation details
      const occupationInputs = within(getByTestId('occupation-form-group')).getAllByRole('textbox');
      await selectEvent.select(occupationInputs[0], "Student");
      fireEvent.change(occupationInputs[1], {target: {value: '10000'}});

      fireEvent.click(getByRole('button', {name: 'Submit'}));

      await waitFor(()=>expect(setUserMock).toHaveBeenCalledWith({
        address: {
          houseNumber: '413',
          postCode: "123 456",
        },
        annualIncome: "10000",
        dateOfBirth: null,
        firstName: "Sue",
        lastName: "Smith",
        occupation: Occupation.STUDENT,
        title: UserTitle.DR,
      }));
      await waitFor(()=>expect(history.location.pathname).toEqual('/matches'));
    })
  })
})