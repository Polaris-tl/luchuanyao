import { useEffect, useState } from 'react';
import { useLocation } from 'umi';
import { myPost, visitRecordAdd } from '@/utils/request';
import { Input, message } from 'antd';
import st from './cases.less';
import Banner from '@/components/banner/banner';
import Detail from '@/components/detail/detail';

export default function Cases() {
  const [banners, setBanners] = useState([]);
  const location = useLocation();
  useEffect(() => {
    visitRecordAdd('2');
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 2,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  // if (location.pathname == '/main/help') {
  //   setTimeout(() => {
  //     document.querySelector('#submitForm')?.scrollIntoView();
  //   }, 100);
  // }
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
      <Detail url="ServiceCase/selectAll" />
    </div>
  );
}
