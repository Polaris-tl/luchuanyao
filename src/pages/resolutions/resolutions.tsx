import Banner from '@/components/banner/banner'
import st from './resolutions.less'
import img1 from '@/static/imgs/banner_product.jpg'
import img2 from '@/static/imgs/banner_case.jpg'
import img3 from '@/static/imgs/banner_resolution.jpg'

import img4 from '@/static/imgs/cases_1.jpg'
import img5 from '@/static/imgs/cases_2.jpg'

const data = [
  {
    title: '解决方案1',
    content: `产品是一个庞大且复杂的系统，数量多且功能复杂，而且
    变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中`,
    url: img4
  },
  {
    title: '解决方案2',
    content: `企业级产品是一个庞大且复杂的系统，数量多且功能复杂，而且
    变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容`,
    url: img5
  },
]

interface ICases {
  title: string,
  content: string,
  url: string
}

const renderBox: React.FC<ICases> = (props) => {
  const {title, content, url} = props
  return(
    <div className={st.wrapper}>
      <div className={st.top}>
        <div className={st.titleBox}>
          <p className={st.title}>{title}</p>
        </div>
        <div className={st.content}>{content}</div>
      </div>
      <div>
        <img src={url} alt=""/>
      </div>
    </div>
  )
}

export default function Cases() {
  return(
    <div>
      <Banner imgUrl={[img1,img2,img3]}/>
      <div className={st.cases}>
        {
          data.map(item => renderBox(item))
        }
      </div>
    </div>
  )
}