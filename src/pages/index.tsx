import { useEffect, useState } from 'react';
import { myGet } from '@/utils/request';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Switch, Route, Link } from 'umi';
import Home from './home/home';
import Cases from './cases/cases';
import News from './news/news';
import NewsDetial from './news/detail';
import Products from './products/products';
import Resolutions from './resolutions/resolutions';
import Strategy from './strategy/strategy';
import Joinus from './joinus/joinus';
import JoinusDetial from './joinus/detail';
import Other1 from './other1/products';
import Other2 from './other2/products';

export default function IndexPage() {
  const [visitor, setVisitor] = useState<number[]>([]);
  useEffect(() => {
    myGet('/User/hasResourceFromUser', { id: '0' }).then((data) => {
      setVisitor(data.map((item: any) => item.id));
    });
  }, []);
  const withAuth = (component: any, id: number) => {
    if (visitor.includes(id)) {
      return component;
    } else {
      return null;
    }
  };
  return (
    <div style={{ backgroundColor: '#f5f7fa' }}>
      <Header />
      <Switch>
        <Route path="/" exact component={withAuth(Home, 8)} />
        <Route path="/mian" exact component={withAuth(Home, 8)} />
        <Route path="/main/products" component={withAuth(Products, 1)} />
        <Route path="/main/resolutions" component={withAuth(Resolutions, 5)} />
        <Route path="/main/cases" component={withAuth(Cases, 2)} />
        <Route path="/main/news" exact component={withAuth(News, 3)} />
        <Route path="/main/news/:id" component={withAuth(NewsDetial, 3)} />
        <Route path="/main/strategy" component={withAuth(Strategy, 6)} />
        <Route path="/main/joinus" exact component={withAuth(Joinus, 4)} />
        <Route path="/main/joinus/:id" component={withAuth(JoinusDetial, 4)} />
        <Route path="/main/help" component={withAuth(Resolutions, 5)} />
        <Route path="/main/other1" component={withAuth(Other1, 9)} />
        <Route path="/main/other2" component={withAuth(Other2, 10)} />
      </Switch>
      <Footer />
    </div>
  );
}
