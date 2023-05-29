import Loader from '@components/Shared/Loader';
import { ErrorMessage } from '@components/UI/ErrorMessage';
import HelpTooltip from '@components/UI/HelpTooltip';
import humanize from '@lib/humanize';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ERROR_MESSAGE } from '@constants/index';
import type { FC } from 'react';
import { KytePublication } from 'src/types';

const Stat: FC<{ title: string; helper: string; stat: number }> = ({ title, helper, stat }) => (
  <>
    <span className="text-sm lt-text-gray-500 font-bold flex items-center space-x-1">
      <span>{title}</span>
      <HelpTooltip content={helper} />
    </span>
    <span className="text-2xl font-bold">{humanize(stat ?? 0)}</span>
  </>
);

interface Props {
  publication: KytePublication;
}

const Stats: FC<Props> = ({ publication }) => {
  // const getStats = async () => {
  //   const response = await axios(SIMPLEANALYTICS_API, {
  //     params: { version: 5, fields: 'pageviews', info: false, page: `/posts/${publication.id}` }
  //   });

  //   return response.data;
  // };

  // const { data, isLoading, error } = useQuery(['statsData'], () => getStats().then((res) => res));

  // if (error) {
  //   return <ErrorMessage className="m-5" title={ERROR_MESSAGE} error={error as any} />;
  // }

  // if (isLoading) {
  //   return <Loader message={`Loading analytics`} />;
  // }

  return (
    <div className="p-5">
      <Stat
        title={`Views`}
        helper={`Times people viewed the details about this publication`}
        stat={0}
      />
    </div>
  );
};

export default Stats;
