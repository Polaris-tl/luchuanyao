import Banner from '@/components/banner/banner'
import st from './products.less'
import img1 from '@/static/imgs/banner_product.jpg'
import img2 from '@/static/imgs/banner_case.jpg'
import img3 from '@/static/imgs/banner_resolution.jpg'

import img4 from '@/static/imgs/cases_1.jpg'
import img5 from '@/static/imgs/cases_2.jpg'
import img6 from '@/static/imgs/cases_3.jpg'

const data = [
  {
    title: '产品1',
    content: `盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。 webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
    常见结合属性：display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。`,
    url: img4
  },
  {
    title: '产品2',
    content: `盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。 webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
    常见结合属性：display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。`,
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