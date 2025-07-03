import AppRouter from "@/Routes/Router";
import ErrorBoundary from "@/Components/ErorrBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
