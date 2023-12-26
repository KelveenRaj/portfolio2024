import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '4rem', padding: '1rem' }}>
        {/* Adjust marginTop value to match the height of your Navbar */}
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default App;
