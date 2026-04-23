import './App.css'
import { AlertBoxTest } from './components/AlertBox/AlertBox.test'

function App() {
  return (
    <>
      <AlertBoxTest type="success" />
      <AlertBoxTest type="error" />
      <AlertBoxTest type="warning" />
      <AlertBoxTest type="info" />
    </>
  )
}

export default App