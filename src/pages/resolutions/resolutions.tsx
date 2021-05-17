import { useEffect, useState } from 'react';
import { myPost } from '@/utils/request';
import { useLocation } from 'umi';
import { Input, message } from 'antd';
import st from './resolutions.less';
import Banner from '@/components/banner/banner';
import Detail from '@/components/detail/detail';

export default function Resolutions() {
  const [banners, setBanners] = useState([]);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 5,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  if (location.pathname == '/main/help') {
    setTimeout(() => {
      document.querySelector('#submitForm')?.scrollIntoView();
    }, 100);
  }
  const onSubmit = () => {
    const form: any = document.querySelector('#submitForm');
    const data = {
      companyName: form.conpanyName.value,
      companyScale: form.scale.value,
      consultContent: form.content.value,
      email: form.email.value,
      name: form.name.value,
      tel: form.tel.value,
    };
    const res = myPost('/TechConsult/add', data);
    res.then((data) => {
      if (data) {
        message.success('提交成功');
        form.querySelectorAll('input').forEach((item: any) => {
          item.value = '';
        });
      } else {
        message.warning('提交失败');
      }
    });
  };
  return (
    <div>
      <Banner imgUrl={banners} />
      <Detail url="Solution/selectAll" />
      <div className={st.form}>
        <form id="submitForm" action="">
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
              <Input name="email" />
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
              <Input.TextArea name="content" />
            </div>
          </div>
        </form>
        <div className={st.div4}>
          <div className={st.btn} onClick={onSubmit}>
            提交
          </div>
        </div>
      </div>
    </div>
  );
}
