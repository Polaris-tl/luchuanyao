import Detail2 from '@/components/detail2/detail';

export default function NewsDetail() {
  return (
    <Detail2
      articleUrl="/NewsCenter/selectById"
      vodeUrl="/Anonymous/newsVote"
      voteKey="joinusId"
      resoureId="3"
    />
  );
}
