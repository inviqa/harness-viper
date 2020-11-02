import { AddressProps, SelectElementOptionProps } from '@inviqa/viper-ui-commerce';
import { Address } from '~hooks/apollo';

const getCountryLabelById = (countryId: string, countries: SelectElementOptionProps[] = []) =>
  countries.find(country => country.value === countryId)?.label ?? countryId;

export const transformAddressForDisplay = (
  { firstName, lastName, company, address2, phoneNumber, country, ...rest }: Address,
  countries: SelectElementOptionProps[] = []
): AddressProps['address'] => ({
  name: `${firstName} ${lastName}`,
  company: company ?? undefined,
  address2: address2 ?? undefined,
  phoneNumber: phoneNumber ?? undefined,
  country: getCountryLabelById(country, countries),
  ...rest
});
