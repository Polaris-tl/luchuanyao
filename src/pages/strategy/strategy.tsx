import st from './strategy.less'
import img1 from '@/static/imgs/banner_resolution.jpg'
import like from '@/static/imgs/like.png'
export default function NewsDetail() {
  return(
    <div>
      <div className={st.detail}>
        <div className={st.left}>
          <div className={st.card1}>
            <div className={st.box1}>
              <div>
                <img className={st.avator} src={img1} alt=""/>
              </div>
              <div>
                <p className={st.name}>橹船摇小秘</p>
                <p>单位： 重庆市橹船摇科技有限公司</p>
              </div>
            </div>
            <div className={st.box2}>
              <span>发布：5</span>
              <span>阅读：5</span>
              <span>关注：5</span>
              <span>回复：5</span>
            </div>
          </div>
          <div className={st.card2}>
            <div className={st.imgBox}>
              <img src={img1} alt=""/>
            </div>
            <div>
              <p className={st.title}>科创老兵的"重庆创业梦"——记鞍山市所所所所所少</p>
              <div className={st.info}>
                <p>发布： 2020-12-12</p>
                <p>评论：3 阅读： 225</p>
              </div>
            </div>
          </div>
        </div>
        <div className={st.right}>
          <p className={st.title}>科创老兵的"重庆创业梦"——记鞍山市所所所所所少</p>
          <div className={st.infoBox}>
            <p>橹船摇故事/</p>
            <p className={st.info}>发布:2020-12-12 10:12  评论:5  阅读:10</p>
          </div>
          <div className={st.like}>
            <img src={like} alt=""/>
            <p>555</p>
          </div>
        </div>
      </div>
    </div>
  )
}