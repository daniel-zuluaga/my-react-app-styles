// import { Card } from "./components/Card/Card"
// import { CardWithStyles } from "./components/Card/CardWithStyles"
import { Button } from "./components/Button/Button"
import "./App.css"

function App() {

  return (
    <>
      <h1>My React App</h1>
      <Button color="orange">
        <p>Orange Button</p>
      </Button>
      <Button>
        <p>Default Button</p>
      </Button>
      <Button color="yellow">
        <p>Yellow Button</p>
      </Button>
    </>
  )
}

export default App
