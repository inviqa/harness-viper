import React, { FunctionComponent, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Button } from '@inviqa/viper-ui';

const NewsletterForm: FunctionComponent<HTMLAttributes<HTMLElement>> = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className="newsletter-form">
      <h2 className="newsletter-form__title text-base">{t('Sign up to our newsletter')}</h2>
      <form className="flex">
        <div className="newsletter-form__input w-full mr-2">
          <Input
            name="email-address"
            id="email-address"
            type="email"
            className="w-full bg-white"
            placeholder={t('Your email address')}
          />
        </div>
        <Button className="newsletter-form__button w-2/5 bg-button-primary-alt hover:bg-button-primary-alt-dark text-button-primary-alt-text">
          {t('Sign up')}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
