import Banner from '@/components/banner/banner';
import st from './home.less';
import video1 from '@/static/videos/shouye.mp4';
import img1 from '@/static/imgs/shouye01.jpg';
import img2 from '@/static/imgs/shouye02.jpg';
import img3 from '@/static/imgs/shouye03.jpg';
import img4 from '@/static/imgs/main_bottom.png';

export default function Home() {
  return (
    <div className={st.home}>
      <Banner imgUrl={[video1]} />
      <div className={st.div1}>
        <div className={st.left}>
          <div>
            <img src={img1} alt="" />
            <div className={st.textBox}>
              <p className={st.title}>质量提升</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
            <div className={st.textBox}>
              <p className={st.title}>安全守护</p>
            </div>
          </div>
        </div>
        <div className={st.right}>
          <div>
            <img src={img3} alt="" />
            <div
              className={st.textBox}
              style={{ whiteSpace: 'nowrap', right: '110px' }}
            >
              <p className={st.title} style={{ margin: '0px' }}>
                光+AI
              </p>
              <p className={st.title} style={{ color: '#f59b42' }}>
                行业数据大脑
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={st.div2}>
        <img src={img4} alt="" />
      </div>
    </div>
  );
}
