import React, { FunctionComponent, HTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TwoColumnContentLayout, Toolbar, ToolbarProps, Button } from '@inviqa/viper-ui';
import { Filter } from '~hooks/apollo';
import { useProductList } from '~hooks/product';
import Result from '../../utility/Result/Result';
import Facets from '../../molecules/Facets/Facets';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductList: FunctionComponent<
  {
    filters?: Filter[];
    searchTerm?: string;
    sortingOptions?: ToolbarProps['sortingOptions'];
  } & HTMLAttributes<HTMLElement>
> = memo(({ filters = [], sortingOptions = [], searchTerm, className, ...props }) => {
  const { t } = useTranslation('catalog');
  const {
    data: { filteredSortingOptions, items, total, facets },
    state: { currentSort, visible, isNewDataLoading, canLoadMore, errorMessage, isFetchingMore },
    actions: { fetchMore, onSortChange, onFilterChange }
  } = useProductList({ filters, searchTerm }, sortingOptions);

  return (
    <div className={className} role="main">
      <Toolbar
        data-toolbar
        sortingOptions={filteredSortingOptions}
        selectedSort={`${currentSort?.criteria}_${currentSort?.order}`}
        onSortChange={onSortChange}
        totalItemCount={total}
        visibleItemCount={visible}
      />

      <Result loading={isNewDataLoading} error={errorMessage}>
        <TwoColumnContentLayout
          sidebarPosition="left"
          sidebar={<Facets facets={facets} onFilterChange={onFilterChange} />}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4" {...props}>
            {items.map(product => (
              <ProductCard key={product.id} data-product-card {...product} />
            ))}
          </div>

          {canLoadMore ? (
            <div className="mt-4 text-center">
              <Button data-load-more variant="secondary" disabled={isFetchingMore} onClick={fetchMore}>
                {t('catalog:LoadMoreProducts')}
              </Button>
            </div>
          ) : null}
        </TwoColumnContentLayout>
      </Result>
    </div>
  );
});

export default ProductList;
