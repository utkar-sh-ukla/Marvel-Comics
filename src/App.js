import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
