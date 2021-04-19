import { Menu } from 'antd';
import { Link } from 'umi'



import st from './footer.less'
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
          <div>asds</div>
        </Menu>
      </div>
    </div>
  )
}
export default Header