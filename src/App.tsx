import { UserContextProvider } from './Contexts/UserContext'
import { AppRouter } from './Router/AppRouter';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <AppRouter />
      </div>
    </UserContextProvider>
  );
}

export default App;
