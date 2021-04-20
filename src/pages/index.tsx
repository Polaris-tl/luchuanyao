import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import {Switch, Route ,Link} from 'umi'
import Home from './home/home'


export default function IndexPage() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mian' exact component={Home} />
        <Route path='/main/products' component={Home} />
        <Route path='/main/resolutions' component={() => (<div>resolutions</div>)} />
        <Route path='/main/cases' component={() => (<div>cases</div>)} />
        <Route path='/main/news' component={() => (<div>news</div>)} />
        <Route path='/main/strategy' component={() => (<div>strategy</div>)} />
        <Route path='/main/joinus' component={() => (<div>joinus</div>)} />
        <Route path='/main/help' component={() => (<div>help</div>)} />
      </Switch>
      <Footer />
    </div>
  );
}
