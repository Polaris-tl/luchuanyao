import st from './banner.less';
import { Carousel } from 'antd';

const contentStyle: any = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
interface IProps {
  imgUrl: string[] | string;
}

const Banner: React.FC<IProps> = (props) => {
  const { imgUrl } = props;
  return (
    <div style={{ position: 'relative', top: '-50px', minWidth: '1200px' }}>
      <Carousel autoplay>
        {Array.isArray(imgUrl) ? (
          imgUrl.map((url, idx) => {
            return (
              <div key={url + idx}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '100%' }}>
                    {url.includes('.mp4') ? (
                      <video
                        src={url}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                      />
                    ) : (
                      <img
                        src={url}
                        alt=""
                        style={{
                          width: '1920px',
                          position: 'relative',
                          left: '50%',
                          marginLeft: '-960px',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h3 style={contentStyle}>{imgUrl}</h3>
          </div>
        )}
      </Carousel>
    </div>
  );
};
export default Banner;
