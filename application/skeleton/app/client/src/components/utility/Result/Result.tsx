import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@inviqa/viper-ui';
import { PacmanLoader as Spinner } from 'react-spinners';
import { MessageType } from '@inviqa/viper-react-hooks';

type Props = {
  loading?: boolean;
  error?: string;
};

const Result: FunctionComponent<Props> = ({ loading, error, children }) => {
  const { t } = useTranslation('common');
  if (loading)
    return (
      <div aria-label={t('Loading')}>
        <Spinner loading={loading} css="display:block; margin: 0 auto;" />
      </div>
    );
  if (error)
    return (
      <Alert type={MessageType.Error} role="alert">
        {error}
      </Alert>
    );
  return <>{children}</>;
};

export default Result;
