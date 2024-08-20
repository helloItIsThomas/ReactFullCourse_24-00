import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Students.jsx";

function App() {
  return (
    <>
      <Student name="Garbo" age={4} isStudent={true} />
      <Student name="Warbo" age={6} isStudent={false} />
      {/* <Button /> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
