import Navbar from "./components/AppBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import WalletContextProvider from "./contexts/WalletContextProvider";

export default function App() {
  return (
    <main>
      <WalletContextProvider cluster="devnet">
        <Navbar />
        <HomePage />
        <Footer />
      </WalletContextProvider>
    </main>
  )
}
