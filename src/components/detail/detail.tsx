import { useEffect, useState } from 'react';
import { myGet } from '@/utils/request';
import st from './detail.less';

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
interface IProps {
  url: string;
}

export default function Detail(props: IProps) {
  const [products, setProducts] = useState([]);
  const { url } = props;
  useEffect(() => {
    (async () => {
      const res = await myGet(url);
      setProducts(res);
    })();
  }, []);
  return (
    <div className={st.cases}>{products.map((item) => renderBox(item))}</div>
  );
}
