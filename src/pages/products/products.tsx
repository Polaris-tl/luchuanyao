import { useEffect, useState } from 'react';
import { myPost, visitRecordAdd } from '@/utils/request';
import Banner from '@/components/banner/banner';
import Detail from '@/components/detail/detail';

export default function Products() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    visitRecordAdd('1');
    (async () => {
      const res = await myPost('ResourceImg/selectByCondition', {
        resourceId: 1,
      });
      setBanners(res.map((item: any) => item.img));
    })();
  }, []);
  return (
    <div>
      <Banner imgUrl={banners} />
      <Detail url="ProductTech/selectAll" />
    </div>
  );
}
