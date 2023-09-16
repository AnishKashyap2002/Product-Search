import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="flex h-full flex-col gap-4">
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/details"
                            element={<ProductDetails />}
                        />
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
