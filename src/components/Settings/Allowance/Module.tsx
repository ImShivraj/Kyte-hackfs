import { Card } from '@/src/components/UI/Card';
import HelpTooltip from '@/src/components/UI/HelpTooltip';
import GetModuleIcon from '@components/UI/GetModuleIcon';
import { getModule } from '@lib/getModule';
import { POLYGONSCAN_URL } from '@constants/index';
import type { ApprovedAllowanceAmount } from 'lens';
import type { FC } from 'react';
import { useState } from 'react';

import AllowanceButton from './Button';

interface Props {
  module: ApprovedAllowanceAmount;
}

const Module: FC<Props> = ({ module }) => {
  const [allowed, setAllowed] = useState(module?.allowance !== '0x00');

  return (
    <Card key={module?.module} className="block justify-between items-center sm:flex p-5" forceRounded>
      <div className="overflow-hidden mr-1.5 mb-3 sm:mb-0">
        <div className="flex items-center space-x-2">
          <div className="text-brand">
            <GetModuleIcon module={module?.module} size={4} />
          </div>
          <div className="font-bold whitespace-nowrap">{getModule(module?.module).name}</div>
          <HelpTooltip content={getModule(module?.module).helper} />
        </div>
        <a
          href={`${POLYGONSCAN_URL}/address/${module?.contractAddress}`}
          className="text-sm lt-text-gray-500 truncate"
          target="_blank"
          rel="noreferrer noopener"
        >
          {module?.contractAddress}
        </a>
      </div>
      <AllowanceButton module={module} allowed={allowed} setAllowed={setAllowed} />
    </Card>
  );
};

export default Module;
