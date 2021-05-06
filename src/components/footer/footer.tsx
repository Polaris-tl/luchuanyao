import { Menu } from 'antd';
import { Link } from 'umi';

import img1 from '@/static/imgs/other.png';
import st from './footer.less';
const Header = () => {
  return (
    <div className={st.footer}>
      <div className={st.box}>
        <div className={st.list}>
          <div className={st.title}>产品技术</div>
          <ul className={st.item}>
            <li>大动态广场探测及传感技术</li>
            <li>哈特曼波前传感器</li>
            <li>低照度摄像P1080机芯</li>
            <li>科学级CCD相机</li>
            <li>线阵CMOS相机</li>
            <li>面阵CMOS相机</li>
          </ul>
        </div>
        <div className={st.list}>
          <div className={st.title}>解决方案</div>
          <ul className={st.item}>
            <li>行业应用1</li>
            <li>行业应用2</li>
          </ul>
        </div>
        <div className={st.list}>
          <div className={st.title}>技术支持</div>
          <ul className={st.item}>
            <li>开发者中心</li>
            <li>技术协议</li>
          </ul>
        </div>
        <div className={st.list}>
          <div className={st.title}>商务合作</div>
          <ul className={st.item}>
            <li>技术咨询</li>
            <li>应用案例</li>
            <li>资源合作</li>
          </ul>
        </div>
        <div className={st.list}>
          <div className={st.title}>关于THESEUS</div>
          <ul className={st.item}>
            <li>企业文化</li>
            <li>发展规划</li>
            <li>信息资讯</li>
            <li>加入我们</li>
          </ul>
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <img src={img1} alt="" />
        </div>
      </div>

      <div className={st.copyright}>
        <span>copyright@ 2020</span>
        <span>重庆摇橹船科技有限公司</span>
        <span>版权所有</span>
        <span>渝ICP备2020011637号</span>
        <span>重庆市渝北区杨柳北路6号15层1-4号</span>
        <span>TEL:023-63015280</span>
      </div>
    </div>
  );
};
export default Header;
