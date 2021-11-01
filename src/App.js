import './styles/app.css';
import Home from './components/home'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql/"
  })

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
