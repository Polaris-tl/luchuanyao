import { Menu } from 'antd';
import { Link } from 'umi'

const mockData = [
  { name: '首页', url: '/'},
  { name: '产品技术', url: '/products'},
  { name: '解决方案', url: '/resolutions'},
  { name: '服务案例', url: '/cases'},
  { name: '新闻中心', url: '/news'},
  { name: '品牌战略', url: '/strategy'},
  { name: '加入我们', url: '/joinus'},
  { name: '技术咨询', url: '/help'},
]

import st from './header.less'
const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.box}>
        <div className={st.logo}>logo</div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="horizontal"
          theme="dark"
        >
          {
            mockData.map( (item,idx) => {
              return(
                <Menu.Item key={item.url + idx}>
                  <Link to={item.url}>{item.name}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </div>
    </div>
  )
}
export default Header