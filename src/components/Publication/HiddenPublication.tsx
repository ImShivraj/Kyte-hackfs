import { Card } from '@/src/components/UI/Card';
import type { FC } from 'react';

interface Props {
  type?: string;
}

const HiddenPublication: FC<Props> = ({ type = 'Publication' }) => {
  return (
    <Card className="!bg-gray-100">
      <div className="py-3 px-4 text-sm">
        {type} was hidden by the author
      </div>
    </Card>
  );
};

export default HiddenPublication;
