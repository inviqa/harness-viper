import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@inviqa/viper-ui';

type Props = {
  name: string;
  heading?: JSX.Element;
  preview?: ReactNode;
  visible?: boolean;
  onEditCallback: () => void;
};

const CheckoutStepWrapper: FunctionComponent<Props> = ({
  name,
  heading,
  visible = false,
  preview,
  onEditCallback,
  children
}) => {
  const { t } = useTranslation('common');

  return (
    <div id={`checkout-section-${name}`} className="checkout-section border-b-px border-gray-500 pb-8">
      <div className="flex justify-between items-center">
        {heading}
        {!visible && preview && (
          <Button className="my-4" onClick={onEditCallback}>
            {t('Edit')}
          </Button>
        )}
      </div>
      <div>{visible ? children : preview}</div>
    </div>
  );
};

export default CheckoutStepWrapper;
