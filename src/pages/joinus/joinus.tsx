import { useEffect, useState } from 'react';
import { myGet, myPost } from '@/utils/request';
import { Link } from 'umi';
import moment from 'moment';
import Banner from '@/components/banner/banner';
import st from './joinus.less';
import { Input } from 'antd';
import img1 from '@/static/imgs/banner_news.png';
interface INews {
  abstractname: string;
  subtitle: string;
  content: string;
  id: string;
  img: string;
  publishDate: string;
  publishPerson: string;
  title: string;
  voteCount: string;
  displayType: 1 | 0;
  isTop: 0 | 1;
}

const renderBox: React.FC<INews> = (props) => {
  const { title, publishDate, img, id, displayType, publishPerson } = props;
  return (
    <>
      {displayType == 1 ? (
        <Link to={`/main/joinus/${id}`} key={id}>
          <div className={st.wrapper}>
            <div className={st.imgBox}>
              <img src={img} alt="" />
            </div>
            <div className={st.textBox}>
              <p className={st.title}>{title}</p>
              <p className={st.date}>{publishDate}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/main/joinus/${id}`} key={id} style={{ width: '100%' }}>
          <div className={st.line}>
            <p className={st.p1}>
              <span>{title}</span>
            </p>
            <p>
              <span style={{ marginRight: '30px' }}>{publishPerson}</span>
              <span>{moment(publishDate).format('yyyy-MM-DD')}</span>
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

const afterSort = (origin: any) => {
  origin.sort((a: any, b: any) => {
    if (b.displayType != a.displayType) {
      return b.displayType - a.displayType;
    } else {
      return b.isTop - a.isTop;
    }
  });
};

export default function News() {
  const [news, setNews] = useState<INews[]>([]);
  const searchNews = (value: string) => {
    myPost('/JoinUs/selectByCondition', { value }).then((data) =>
      setNews(data),
    );
  };
  useEffect(() => {
    (async () => {
      const res = await myGet<INews[]>('/JoinUs/selectAll');
      afterSort(res);
      res && setNews(res);
    })();
  }, []);
  return (
    <div>
      <Banner imgUrl={[img1]} />
      <div
        style={{
          width: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 20px',
          position: 'absolute',
          top: '120px',
          right: 0,
          left: 0,
        }}
      >
        <Input.Search
          placeholder="请输入搜索内容"
          style={{
            width: '400px',
          }}
          onSearch={searchNews}
          enterButton
        />
      </div>
      <div className={st.news}>{news.map((item) => renderBox(item))}</div>
    </div>
  );
}
