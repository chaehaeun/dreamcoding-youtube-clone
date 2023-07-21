import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeContextApiProvider } from "./context/YoutubeContextApi";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <SearchHeader />
      <YoutubeContextApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeContextApiProvider>
    </>
  );
}

export default App;
