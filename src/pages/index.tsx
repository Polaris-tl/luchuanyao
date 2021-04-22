import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import {Switch, Route ,Link} from 'umi'
import Home from './home/home'
import Cases from './cases/cases'
import News from './news/news'
import NewsDetial from './news/detail'
import Products from './products/products'
import Resolutions from './resolutions/resolutions'
import Strategy from './strategy/strategy'
import Joinus from './joinus/joinus'
import Help from './help/help'


export default function IndexPage() {
  return (
    <div style={{backgroundColor: '#f5f7fa'}}>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mian' exact component={Home} />
        <Route path='/main/products' component={Products} />
        <Route path='/main/resolutions' component={Resolutions} />
        <Route path='/main/cases' component={Cases} />
        <Route path='/main/news' exact component={News} />
        <Route path='/main/news/:id' component={NewsDetial} />
        <Route path='/main/strategy' component={Strategy} />
        <Route path='/main/joinus' component={Joinus} />
        <Route path='/main/help' component={Help} />
      </Switch>
      <Footer />
    </div>
  );
}
