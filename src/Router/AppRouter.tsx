import { Route, Switch } from 'react-router-dom'
import { UserCardMatches, UserDetailsForm , SelectedCardsPage} from '../Pages'

export const AppRouter = () => {
  return (            
    <Switch>
      <Route path="/" component={UserDetailsForm} exact />
      <Route path="/matches" component={UserCardMatches} />
      <Route path="/compare" component={SelectedCardsPage} />
    </Switch>
  )
}