import {useRef} from 'react'
import { Input, Button } from 'antd'
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
  const formDiv = useRef<HTMLFormElement | null>(null)
  const formSubmit = () => {
    if(!formDiv.current) return
    const res = {
      username: formDiv.current.username.value,
      tel: formDiv.current.tel.value,
      address: formDiv.current.address.value,
      size: formDiv.current.size.value,
      enterprizeName: formDiv.current.enterprizeName.value,
      content: formDiv.current.content.value,
    }
    console.log(res)
  }
  return(
    <div>
      <Banner imgUrl={[img1,img2,img3]}/>
      <div className={st.cases}>
        {
          data.map(item => renderBox(item))
        }
      </div>
      <form className={st.form} ref={(refs) => formDiv.current = refs}>
        <div className={st.fullWidth}>
          <div>
            <p>姓名</p>
            <Input name='username'/>
          </div>
          <div>
            <p>联系电话</p>
            <Input name='tel'/>
          </div>
          <div>
            <p>邮件地址</p>
            <Input name='address'/>
          </div>
        </div>
        <div className={st.fullWidth}>
          <div>
            <p>公司规模</p>
            <Input name='size'/>
          </div>
          <div style={{flex: 1}}>
            <p>企业名称</p>
            <Input name='enterprizeName'/>
          </div>
        </div>
        <div className={st.fullWidth} style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <p>咨询内容</p>
            <Input.TextArea style={{minHeight: '100px'}} name='content'/>
          </div>
        </div>
        <div style={{    display: 'flex', justifyContent: 'flex-end'}}>
          <Button type='primary' onClick={formSubmit}>提交</Button>
        </div>
      </form>
    </div>
  )
}