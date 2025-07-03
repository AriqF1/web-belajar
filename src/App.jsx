import AppRouter from "@/Routes/Router";
import ErrorBoundary from "@/Components/ErorrBoundary";
import { PencapaianProvider } from "@/Context/PencapaianContext";

function App() {
  return (
    <PencapaianProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </PencapaianProvider>
  );
}

export default App;
