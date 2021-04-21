import Banner from '@/components/banner/banner'
import st from './cases.less'
import img1 from '@/static/imgs/banner_product.jpg'
import img2 from '@/static/imgs/banner_case.jpg'
import img3 from '@/static/imgs/banner_resolution.jpg'

import img4 from '@/static/imgs/cases_1.jpg'
import img5 from '@/static/imgs/cases_2.jpg'
import img6 from '@/static/imgs/cases_3.jpg'

const data = [
  {
    title: '标题1',
    subTitle: '但是这个属性只支持单行文本的溢出显示省略号，如果我们要实现多行文本溢出显示省略号呢接下来重点说一说多行文本溢出显示省略号',
    content: `
    webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
    常见结合属性：display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。 webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
    常见结合属性：display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。webkit-box-orient 必须结合的属性
     ，设置或检索伸缩盒对象的子元素的排列方式 。`,
    url: img4
  },
  {
    title: '标题2',
    subTitle: '2但是这个属性只支持单行文本的溢出显示省略号，如果我们要实现多行文本溢出显示省略号呢接下来重点说一说多行文本溢出显示省略号',
    url: img5
  },
   {
    url: img6
  }
]

interface ICases {
  title?: string,
  subTitle?: string,
  content?: string,
  url: string
}
const renderBox: React.FC<ICases> = (props) => {
  const {title, subTitle, content, url} = props
  const renderTitle = (title?: string, subTitle?: string, content?: string) => {
    if(!title && !subTitle && !content){
      return null
    }
    return(
      <div className={st.top}>
        <div className={st.titleBox} style={content ? {} : {flexBasis: '100%'}}>
          <p className={st.title}>{title}</p>
          <p className={st.subTitle} style={content ? {} : {width: '100%'}}>{subTitle}</p>
        </div>
        {content && <div className={st.content}>{content}</div>}
      </div>
    )
  } 
  return(
    <div className={st.wrapper}>
      {
        renderTitle(title, subTitle, content)
      }
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