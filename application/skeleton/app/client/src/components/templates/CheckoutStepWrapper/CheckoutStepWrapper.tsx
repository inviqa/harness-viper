import React, { FunctionComponent, ReactNode } from 'react';
import { Flex, Box, Button } from 'theme-ui';
import { useTranslation } from '~lib/createI18n';

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
    <Box
      sx={{ borderBottom: '1px solid', borderColor: 'border', paddingBottom: '2rem' }}
      id={`checkout-section-${name}`}
      className="checkout-section"
    >
      <Flex sx={{ justifyContent: 'space-between' }}>
        {heading}
        {!visible && preview && (
          <Button sx={{ margin: '25px 0' }} onClick={onEditCallback}>
            {t('Edit')}
          </Button>
        )}
      </Flex>
      <Box>{visible ? children : preview}</Box>
    </Box>
  );
};

export default CheckoutStepWrapper;
