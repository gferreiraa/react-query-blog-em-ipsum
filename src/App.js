import { Posts } from "./Post";
import "./App.css";

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

/* 
  First step is create a Client Provider, import { QueryClient and QueryClientProvider }
  
*/

const queryClient = new QueryClient()

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;