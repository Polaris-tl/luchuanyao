import { Menu } from 'antd';
import { Link } from 'umi';
import { useEffect, useState } from 'react';
import { myGet } from '@/utils/request';

const mockData = [
  { name: '首页', url: '/', id: 8 },
  { name: '产品技术', url: '/main/products', id: 1 },
  { name: '解决方案', url: '/main/resolutions', id: 5 },
  { name: '服务案例', url: '/main/cases', id: 2 },
  { name: '新闻中心', url: '/main/news', id: 3 },
  { name: '品牌战略', url: '/main/strategy', id: 6 },
  { name: '加入我们', url: '/main/joinus', id: 4 },
  { name: '其他其一', url: '/main/other1', id: 9 },
  { name: '其他其二', url: '/main/other2', id: 10 },
  { name: '技术咨询', url: '/main/help', id: 5 },
];

import st from './header.less';
const Header = () => {
  const [visitor, setVisitor] = useState<number[]>([]);
  useEffect(() => {
    myGet('/User/hasResourceFromUser', { id: '0' }).then((data) => {
      setVisitor(data.map((item: any) => item.id));
      data.forEach((item: any) => {
        const s = mockData.find((item2) => item2.id == item.id);
        s && (s.name = item.name);
      });
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
    <div className={st.header}>
      <div className={st.box}>
        <div className={st.logo}></div>
        <Menu defaultSelectedKeys={['1']} mode="horizontal" theme="dark">
          {mockData.map((item, idx) => {
            if (visitor.includes(item.id)) {
              return (
                <Menu.Item key={item.url + idx}>
                  <Link to={item.url}>{item.name}</Link>
                </Menu.Item>
              );
            } else {
              return null;
            }
          })}
        </Menu>
      </div>
    </div>
  );
};
export default Header;
