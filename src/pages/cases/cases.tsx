import { useEffect, useState } from 'react';
import { useLocation } from 'umi';
import { myPost } from '@/utils/request';
import { Input, Button } from 'antd';
import st from './cases.less';
import Banner from '@/components/banner/banner';
import Detail from '@/components/detail/detail';

export default function Cases() {
  const [banners, setBanners] = useState([]);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 2,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  if (location.pathname == '/main/help') {
    setTimeout(() => {
      document.querySelector('#submitForm')?.scrollIntoView();
    }, 100);
  }
  return (
    <div>
      <Banner imgUrl={banners} />
      <Detail url="ServiceCase/selectAll" />
      <div id="submitForm" className={st.form}>
        <form action="">
          <div className={st.div1}>
            <div>
              <p>姓名</p>
              <Input name="name" />
            </div>
            <div>
              <p>联系电话</p>
              <Input name="tel" />
            </div>
            <div>
              <p>邮件地址</p>
              <Input name="address" />
            </div>
          </div>
          <div className={st.div2}>
            <div>
              <p>公司规模</p>
              <Input name="scale" />
            </div>
            <div>
              <p>企业名称</p>
              <Input name="conpanyName" />
            </div>
          </div>
          <div className={st.div3}>
            <div>
              <p>咨询内容</p>
              <Input.TextArea name="scale" />
            </div>
          </div>
        </form>
        <div className={st.div4}>
          <div className={st.btn}>提交</div>
        </div>
      </div>
    </div>
  );
}
