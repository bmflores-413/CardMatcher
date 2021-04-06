import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

describe('User details form', ()=>{
  const history = createMemoryHistory();
  const setupTest = () => {
    return ({...render(<Router history={history}><App /></Router>), history})
  }
  it('Renders the user details form', ()=>{
    const {getByText} = setupTest();
    expect(getByText('Enter Your Details')).toBeInTheDocument();
  })
})
