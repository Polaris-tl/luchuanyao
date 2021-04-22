import { Link } from 'umi'
import Banner from '@/components/banner/banner'
import st from './news.less'
import img1 from '@/static/imgs/banner_product.jpg'
import img2 from '@/static/imgs/banner_case.jpg'
import img3 from '@/static/imgs/banner_resolution.jpg'

import img4 from '@/static/imgs/cases_1.jpg'
import img5 from '@/static/imgs/cases_2.jpg'
import img6 from '@/static/imgs/cases_3.jpg'

const data = [
  {
    title: '标题1',
    createdAt: '2020-12-14',
    url: img4,
    id: '1'
  },
  {
    title: '标题2',
    createdAt: '2020-12-14',
    url: img5,
    id: '2'
  },
   {
    title: '标题3',
    createdAt: '2020-12-14',
    url: img6,
    id: '3'
  }
]

interface INews {
  title: string,
  createdAt: string,
  url: string,
  id: string
}

const renderBox: React.FC<INews> = (props) => {
  const {title, createdAt, url, id} = props
  return(
    <Link to={`/main/news/${id}`}>
      <div className={st.wrapper}>
        <div className={st.imgBox}>
          <img src={url} alt=""/>
        </div>
        <div className={st.textBox}>
          <p className={st.title}>{title}</p>
          <p className={st.date}>{createdAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default function News() {
  return(
    <div>
      <Banner imgUrl={[img1,img2,img3]}/>
      <div className={st.news}>
        {
          data.map(item => renderBox(item))
        }
      </div>
    </div>
  )
}