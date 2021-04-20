import Banner from '@/components/banner/banner'
import st from './home.less'
import img1 from '@/static/imgs/banner_product.jpg'
import img2 from '@/static/imgs/banner_case.jpg'
import img3 from '@/static/imgs/banner_resolution.jpg'

export default function Home() {
  return (
    <div>
      <Banner imgUrl={[img1,img2,img3]}/>
      <div className={st.div1}>
        <div className={st.left}>
          <div>
            <img src={img1} alt=""/>
            <div className={st.text}>
              <p className={st.subTitle}>检测智能相机系统，已科学级工业相机最高代表——探月工程"嫦娥"相机为技术之母</p>
              <p className={st.title}>工业智检</p>
            </div>
          </div>
        </div>
        <div className={st.right}></div>
      </div>
      <div className={st.div2}>
        <img src="" alt=""/>
      </div>
    </div>
  );
}