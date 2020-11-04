import { BoxOwnProps } from 'theme-ui';
import { ProductPageFragmentFragment } from '~hooks/apollo';

export type ProductContentProps = ProductPageFragmentFragment['product'] & { as?: BoxOwnProps['as'] };
