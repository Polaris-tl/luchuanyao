import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import {Switch, Route ,Link} from 'umi'
import Home from './home/home'
import Cases from './cases/cases'
import News from './news/news'


export default function IndexPage() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mian' exact component={Home} />
        <Route path='/main/products' component={Home} />
        <Route path='/main/resolutions' component={() => (<div>resolutions</div>)} />
        <Route path='/main/cases' component={Cases} />
        <Route path='/main/news' component={News} />
        <Route path='/main/strategy' component={() => (<div>strategy</div>)} />
        <Route path='/main/joinus' component={() => (<div>joinus</div>)} />
        <Route path='/main/help' component={() => (<div>help</div>)} />
      </Switch>
      <Footer />
    </div>
  );
}
