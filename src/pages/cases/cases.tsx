import { useEffect, useState } from 'react';
import { myGet, myPost } from '@/utils/request';
import Banner from '@/components/banner/banner';
import st from './cases.less';

interface ICases {
  title?: string;
  subtitle?: string;
  content?: string;
  img: string;
}
const renderBox: React.FC<ICases> = (props) => {
  const { title, subtitle, content, img } = props;
  const renderTitle = (title?: string, subtitle?: string, content?: string) => {
    if (!title && !subtitle && !content) {
      return null;
    }
    return (
      <div className={st.top}>
        <div
          className={st.titleBox}
          style={content ? {} : { flexBasis: '100%' }}
        >
          <p className={st.title}>{title}</p>
          <p className={st.subTitle} style={content ? {} : { width: '100%' }}>
            {subtitle}
          </p>
        </div>
        {content && <div className={st.content}>{content}</div>}
      </div>
    );
  };
  return (
    <div className={st.wrapper}>
      {renderTitle(title, subtitle, content)}
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
        resourceId: 2,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await myGet('ServiceCase/selectAll');
      setProducts(res);
    })();
  }, []);
  return (
    <div>
      <Banner imgUrl={banners} />
      <div className={st.cases}>{products.map((item) => renderBox(item))}</div>
    </div>
  );
}
