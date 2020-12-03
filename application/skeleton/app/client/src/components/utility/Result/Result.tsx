import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Spinner } from 'theme-ui';

type Props = {
  loading?: boolean;
  error?: string;
};

const Result: FunctionComponent<Props> = ({ loading, error, children }) => {
  const { t } = useTranslation('common');
  if (loading) return <Spinner aria-label={t('Loading')} sx={{ display: 'block', margin: '0 auto' }} />;
  if (error) return <Alert role="alert">{error}</Alert>;
  return <>{children}</>;
};

export default Result;
