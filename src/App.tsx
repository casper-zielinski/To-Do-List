import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    //for List Elements, normal Array
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
  ];

  const handle = (item: string) => {
    console.log(item);
    };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectedItem={handle}/>
    </div>
  );
}

export default App;
