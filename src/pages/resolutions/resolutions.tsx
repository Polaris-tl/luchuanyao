import { useEffect, useState } from 'react';
import { myPost } from '@/utils/request';
import Banner from '@/components/banner/banner';
import Detail from '@/components/detail/detail';

export default function Resolutions() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 5,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  return (
    <div>
      <Banner imgUrl={banners} />
      <Detail url="Solution/selectAll" />
    </div>
  );
}
