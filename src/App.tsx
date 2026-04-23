import './App.css'
import { AlertBoxTest } from './components/AlertBox/AlertBox.test'
import { UserProfileCardTest } from './components/UserProfileCard/UserProfileCard.test'


function App() {
  return (
    <>
      <AlertBoxTest type="success" />
      <AlertBoxTest type="error" />
      <AlertBoxTest type="warning" />
      <AlertBoxTest type="info" />
      <UserProfileCardTest/>
    </>
  )
}

export default App