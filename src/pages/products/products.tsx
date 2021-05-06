import { useEffect, useState } from 'react';
import { myGet, myPost } from '@/utils/request';
import Banner from '@/components/banner/banner';
import st from './products.less';

interface ICases {
  title: string;
  content: string;
  img: string;
}

const renderBox: React.FC<ICases> = (props) => {
  const { title, content, img } = props;
  return (
    <div className={st.wrapper}>
      <div className={st.top}>
        <div className={st.titleBox}>
          <p className={st.title}>{title}</p>
        </div>
        <div className={st.content}>{content}</div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default function Cases() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 1,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await myGet('ProductTech/selectAll');
      setProducts(res);
    })();
  }, []);
  return (
    <div>
      <Banner imgUrl={banners} />
      <div className={st.cases}>{products?.map((item) => renderBox(item))}</div>
    </div>
  );
}
