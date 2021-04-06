import { createContext, useEffect, useState } from 'react';

import { CreditCard, User } from '../types';

import {SAMPLE_CARDS} from '../sampleCards'
import { getCardMatches } from './userCardMatcher';

interface IUserContextProviderProps {
  children: JSX.Element;
}

interface IUserContext {
  user: User | null;
  userCardMatches: CreditCard[];
  onSetUser: (user: User) => void;

}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({children}: IUserContextProviderProps) => {

  const [user, setUser] = useState<User | null>(null);

  const [userCardMatches, setUserCardMatches] = useState<CreditCard[]>([]);

  useEffect(()=>{
    const updatedMatches = user ? getCardMatches({user, allCards: SAMPLE_CARDS}) : [];
    setUserCardMatches(updatedMatches)
  }, [user])

  const handleChangeUser = (user: User) => {
    setUser(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userCardMatches,
        onSetUser: handleChangeUser
      }}>
      {children}
    </UserContext.Provider>
  );
};