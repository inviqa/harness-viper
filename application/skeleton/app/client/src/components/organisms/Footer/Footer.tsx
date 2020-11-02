/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx, Container, Grid, Box, Link, Input, Button, Flex } from 'theme-ui';
import { MenuItem, useGetMenuQuery } from '~hooks/apollo';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';

type FooterColProps = {
  items: Omit<MenuItem, 'items'>[];
};

const FooterCol: FunctionComponent<FooterColProps> = ({ items }) => (
  // voiceover will remove these semantics if list does not have list styling so role is necessary
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <ul role="list" sx={{ variant: 'lists.plain', lineHeight: 1.625 }}>
    {items.map(item => (
      <li key={item.name}>
        <Link href={item.link} variant="inverted" sx={{ fontWeight: 'bold', textDecoration: 'none' }}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Footer: FunctionComponent = () => {
  const { data } = useGetMenuQuery({ variables: { name: 'footer' } });

  return (
    <Container
      className="footer"
      as="footer"
      sx={{
        variant: 'panels.accent',
        mt: 5,
        pb: '5rem',
        alignSelf: 'flex-end',
        flex: 0,
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 'auto',
          bottom: 'auto',
          left: '50%',
          height: '100%',
          transform: 'translateX(-50%)',
          minWidth: '100vw',
          zIndex: '-1',
          mask: 'url("/images/houndstooth.svg")',
          maskRepeat: 'repeat-x',
          maskSize: '160px',
          maskPosition: 'center 100%',
          bg: 'highlight'
        }
      }}
    >
      <Grid
        columns={[1, '1fr 2fr 1fr']}
        sx={{
          pb: '10rem',
          backgroundImage: 'url("/images/logo.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: '5rem 5rem'
        }}
      >
        <Box>{data?.menu && <FooterCol items={data?.menu.items ?? []} />}</Box>
        <Box sx={{ m: 0, pr: '15%' }}>
          <Heading level={2} display={5} sx={{ mb: 2 }}>
            Sign up to our newsletter
          </Heading>
          <Flex as="form">
            <Input
              name="email-address"
              id="email-address"
              type="email"
              sx={{ bg: 'background', width: '60%', mr: 2 }}
              placeholder="Your email address"
            />
            <Button variant="base" sx={{ width: '40%' }}>
              Sign up
            </Button>
          </Flex>
        </Box>
        <Box>
          <Paragraph sx={{ m: 0 }}>
            Part of the{' '}
            <Link href="https://www.inviqa.com" variant="inverted">
              Inviqa Group
            </Link>
            .<br />
            &copy; 2020 Inviqa
          </Paragraph>
        </Box>
      </Grid>
    </Container>
  );
};

export default Footer;
