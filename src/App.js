import { Route, Switch } from 'wouter'
import ContactPage from './pages/contact';
import HomePage from './pages/home'
import PorfolioDetailPage from './pages/portfolioDetail'
function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={PorfolioDetailPage} path="/w/:title" />
        <Route component={ContactPage} path="/contact" />
      </Switch>
    </>
  )
}
export default App;
