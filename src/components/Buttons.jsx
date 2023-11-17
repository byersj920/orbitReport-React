import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (<div>
  {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
  })}
  <button onClick={() => setSat(satData)}>This is a test</button>
  </div>)
}

export default Buttons;