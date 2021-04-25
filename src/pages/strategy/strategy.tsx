import st from './strategy.less'
import img1 from '@/static/imgs/banner_resolution.jpg'
import img2 from '@/static/imgs/banner_product.jpg'
import Banner from '@/components/banner/banner'
export default function NewsDetail() {
  return(
    <div>
      <Banner imgUrl={[img1, img1,]}/>
      <div>
        <div className={st.wrapper}>
          <div className={st.titleBox}>
            <p className={st.title}>战略标题1</p>
            <img src={img2} alt=""/>
          </div>
          <div className={st.content}>
            <p>
              支持的插件的确丰富，可定制型也的确强，但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome
            </p>
          </div>
        </div>

        <div className={st.wrapper}>
          <div className={st.titleBox}>
            <p className={st.title}>战略标题1</p>
            <img src={img2} alt=""/>
          </div>
          <div className={st.content}>
            <p>
              支持的插件的确丰富，可定制型也的确强，但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome
            </p>
          </div>
        </div>

        <div className={st.wrapper}>
          <div className={st.titleBox}>
            <p className={st.title}>战略标题1</p>
            <img src={img2} alt=""/>
          </div>
          <div className={st.content}>
            <p>
              支持的插件的确丰富，可定制型也的确强，但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome但并不是特别强的优势。我需要的插件，其他浏览器上也都能装，主要是 油猴子、LastPass、Adb等。然发布了几次更新，都说速度有了提升，但从个人使用的直觉上来看，还是比不上Safari和Chrome
另：Alfred对于收藏夹的搜索，只能是Safari和Chrome
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}