import { AddressProps, BillingAddressFormProps } from '@inviqa/viper-ui';
import { Address } from '~hooks/apollo';

// TODO: make a more generic type for countries
// TODO: tests for this file
const getCountryLabelById = (countryId: string, countries: BillingAddressFormProps['countries'] = []) =>
  countries.find(country => country.value === countryId)?.label ?? countryId;

export const transformAddressForDisplay = (
  { firstName, lastName, company, address2, phoneNumber, country, ...rest }: Address,
  countries: BillingAddressFormProps['countries'] = []
): AddressProps['address'] => ({
  name: `${firstName} ${lastName}`,
  company: company ?? undefined,
  address2: address2 ?? undefined,
  phoneNumber: phoneNumber ?? undefined,
  country: getCountryLabelById(country, countries),
  ...rest
});
