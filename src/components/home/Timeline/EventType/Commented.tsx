import ThreadBody from '@components/Publication/ThreadBody';
import { Comment, FeedItem } from '@lens/generated';
import type { FC } from 'react';
import { KytePublication } from 'src/types';

interface Props {
  feedItem: FeedItem;
}

const Commented: FC<Props> = ({ feedItem }) => {
  const publication = feedItem.root as Comment;
  const firstComment = feedItem.comments && feedItem.comments[0];

  return firstComment ? (
    <ThreadBody publication={publication as KytePublication} />
  ) : publication?.commentOn ? (
    <ThreadBody publication={publication?.commentOn as KytePublication} />
  ) : null;
};

export default Commented;
