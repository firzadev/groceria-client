import Header from "./components/Header";
import { PromoCarousel } from "./components/body/PromoCarousel";

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <section>
        <PromoCarousel />
      </section>
      {/* <Route path="/about" component={About} /> */}
    </div>
  );
}

export default App;
