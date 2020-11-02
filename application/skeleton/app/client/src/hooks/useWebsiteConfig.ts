import { useRouter } from 'next/router';
import { getWebsiteIdFromPath } from '~lib/website';
import { websiteConfig } from '../../websiteConfig';

function useWebsiteConfig() {
  const { asPath } = useRouter();
  const currentWebsite = getWebsiteIdFromPath(asPath);

  return websiteConfig.find(({ id }) => id === currentWebsite);
}

export default useWebsiteConfig;
