import "./App.css";
import { Body } from "./Components/Body";
import companies from "./Components/companies.json"; //{companies[0].company}
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// {companies.map(  (compani, index) => (<li key={index}> {companies[index].company} </li>   )     )}

function App() {
  return (
    <section className="General">
      <Header title="The largest companies in the world" />
      <div className="App-header">
        {companies.map((companyMap, index) => (
          <Body
            key={index}
            url_image={companies[index].url_image}
            company={companies[index].company}
            marketCap={companies[index].marketCap}
            ticker={companies[index].ticker}
            country={companies[index].country}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default App;
