import { Menu } from 'antd';
import { Link } from 'umi'



import st from './footer.less'
const Header = () => {
  return (
    <div className={st.footer}>
      <div className={st.box}>
        <div>
          <div>产品技术</div>
          <ul>
            <li>产品技术1</li>
            <li>产品技术2</li>
            <li>产品技术3</li>
          </ul>
        </div>
        <div>
          <div>解决方案</div>
          <ul>
            <li>行业应用1</li>
            <li>行业应用2</li>
          </ul>
        </div>
        <div>
          <div>技术支持</div>
          <ul>
            <li>开发者中心</li>
            <li>技术协议</li>
          </ul>
        </div>
        <div>
          <div>商务合作</div>
          <ul>
            <li>技术咨询</li>
            <li>应用案例</li>
            <li>资源合作</li>
          </ul>
        </div>
        <div>
          <div>关于THESEUS</div>
          <ul>
            <li>企业文化</li>
            <li>发展规划</li>
            <li>信息资讯</li>
            <li>加入我们</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header