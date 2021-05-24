import st from './detail.less';
import { useParams } from 'umi';
import { useEffect, useState } from 'react';
import { myGet, myPost } from '@/utils/request';
import img1 from '@/static/imgs/banner_resolution.jpg';
import like from '@/static/imgs/like.png';
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
  readCount: number;
  displayType: 1 | 0;
  isTop: 0 | 1;
}
export default function JoinsDetail() {
  const [news, setNews] = useState<INews>();
  const { id } = useParams<any>();
  useEffect(() => {
    myGet('/JoinUs/selectById', { id }).then((data) => {
      setNews(data);
    });
    myPost('/Anonymous/joinusRead', { joinusId: id });
  }, []);
  const onLikeArticle = () => {
    myPost('/Anonymous/joinusVote', { joinusId: id });
    const n = Number(news?.voteCount);
    setNews({
      ...news,
      voteCount: n + 1,
    });
  };
  return (
    <div>
      <div className={st.detail}>
        <div className={st.left}>
          <div className={st.card1}>
            <div className={st.box1}>
              <div>
                <img className={st.avator} src={img1} alt="" />
              </div>
              <div>
                <p className={st.name}>{news?.publishPerson}</p>
              </div>
            </div>
            <div className={st.box2}>
              <p>阅读： {news?.voteCount}</p>
            </div>
          </div>
          <div className={st.card2}>
            <div className={st.imgBox}>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className={st.title}>{news?.title}</p>
              <div className={st.info}>
                <p>发布： {news?.publishDate}</p>
                <p>阅读： {news?.readCount || 0}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={st.right}>
          <p className={st.title}>{news?.title}</p>
          <div className={st.infoBox}>
            <p>{news?.abstractname}</p>
            <p className={st.info}>
              发布:{news?.publishDate} 阅读:{news?.readCount || 0}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: news?.content || '' }}
            style={{ margin: '10px 20px' }}
          ></div>
          <div className={st.like} onClick={onLikeArticle}>
            <img src={like} alt="" />
            <p>{news?.voteCount || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
