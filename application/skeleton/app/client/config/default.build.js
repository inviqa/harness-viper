// Note:
// -----
// This config file is used as part of the docker image build, the config
// values here will allow Next.js to build static pages and query the gateway
// from a CI runner.
//
// At container runtime the SSR value will be used by the Next Server and
// the Next Client will have the CSR value interpolated where appropriate.

export default {
  gateway: {
    // phase(runtime): interpolated at container start using the value of an
    // environment variable of the same name.
    csr: '',

    // phase(build):
    // supplied by CI runner to allow static content building
    //
    // phase(runtime):
    // supplied by eg. kubernetes, to allow first page load
    // to be server side rendered and bypass the load balancer
    // by using an internal service name.
    ssr: process.env.GATEWAY_SSR_URL
  }
};
