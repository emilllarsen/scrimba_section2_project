import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import countryData from "./data/countryData";

export default function App() {
  return (
    <>
      <Header />
      {countryData.map((card, i) => {
        return <Entry key={i} {...card} />;
      })}
    </>
  );
}
