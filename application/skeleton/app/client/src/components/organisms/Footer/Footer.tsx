import React, {
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  AnchorHTMLAttributes,
  RefAttributes
} from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { MenuItem, useGetMenuQuery } from '~hooks/apollo';
import NewsletterForm from '../../molecules/NewsletterForm/NewsletterForm';

type FooterColProps = {
  items: Omit<MenuItem, 'items'>[];
};

const FooterLink: ForwardRefExoticComponent<
  AnchorHTMLAttributes<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement>
> = forwardRef(({ children, className, href, ...props }, ref) => (
  <Link href={href ?? '/'} passHref>
    <a
      ref={ref}
      className={cx('footer__link text-white font-normal hover:text-white hover:text-opacity-80', className)}
      {...props}
    >
      {children}
    </a>
  </Link>
));

const FooterCol: FunctionComponent<FooterColProps> = ({ items }) => (
  // voiceover will remove these semantics if list does not have list styling so role is necessary
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <ul role="list" className="leading-relaxed">
    {items.map(item => (
      <li key={item.name}>
        <FooterLink href={item.link}>{item.name}</FooterLink>
      </li>
    ))}
  </ul>
);

const Footer: FunctionComponent = () => {
  const { data } = useGetMenuQuery({ variables: { name: 'footer' } });

  return (
    <footer className="footer w-full box-border relative mt-16 pt-16 pb-20 px-4 md:px-16 self-end flex-initial text-panels-accent-text bg-panels-accent bg-footer-bg bg-repeat-x bg-40 bg-center-bottom">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 pb-40 bg-footer-logo bg-no-repeat bg-bottom bg-20">
        <div className="md:col-span-1">{data?.menu && <FooterCol items={data?.menu.items ?? []} />}</div>
        <div className="md:col-span-2 m-0 w-5/6">
          <NewsletterForm />
        </div>
        <div className="md:col-span-1">
          <p className="m-0">
            Part of the{' '}
            <FooterLink href="https://www.inviqa.com" className="underline">
              Inviqa Group
            </FooterLink>
            .<br />
            &copy; 2020 Inviqa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
