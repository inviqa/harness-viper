import React, { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { formatPrice, StyledFacets } from '@inviqa/viper-ui-commerce';
import { FacetOption, GetProductsQuery } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';
import useWebsiteConfig from '~hooks/useWebsiteConfig';
import { useTranslation } from '~lib/createI18n';

export type Props = HTMLAttributes<HTMLElement> & {
  facets: GetProductsQuery['products']['facets'];
  onFilterChange: (filters: { name: string; value: string }[]) => void;
};

const Facets: FunctionComponent<Props> = ({ facets, ...props }) => {
  const { t } = useTranslation('catalog');
  const websiteConfig = useWebsiteConfig();

  const transformedFacets = useMemo(() => {
    const makeOptionLabel = ({ facetName, label, value }: FacetOption) => {
      switch (facetName) {
        case 'price':
          if (value?.__typename === 'FacetRangeValue' && websiteConfig) {
            const { currency, locale } = websiteConfig;
            return value.to
              ? `${formatPrice(Number(value.from), currency, locale)} − ${formatPrice(
                  Number(value.to),
                  currency,
                  locale
                )}`
              : t('Facet.Range.Over', { value: formatPrice(Number(value.from), currency, locale) });
          }

          return parseHtml(label);
        default:
          if (label === '0') {
            return t('Facet.Boolean.No');
          }
          if (label === '1') {
            return t('Facet.Boolean.Yes');
          }

          return parseHtml(label);
      }
    };

    return facets.map(({ label, options, ...facet }) => ({
      ...facet,
      label: parseHtml(label),
      options: options.map(option => ({
        ...option,
        label: makeOptionLabel(option),
        value: JSON.stringify(option.value)
      }))
    }));
  }, [facets, websiteConfig, t]);

  return <StyledFacets facets={transformedFacets} {...props} />;
};

export default Facets;
