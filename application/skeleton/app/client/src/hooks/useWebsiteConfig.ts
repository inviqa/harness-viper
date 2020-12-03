import { useRouter } from 'next/router';
import { websiteConfig } from '../../websiteConfig';

function useWebsiteConfig() {
  const { locale } = useRouter();

  return websiteConfig.find(({ id }) => id === locale);
}

export default useWebsiteConfig;
