import instance from '../createI18n';

jest.unmock('../createI18n');

describe('createI18n', () => {
  it('sets available languages', () => {
    expect(instance.config.allLanguages).toStrictEqual(['cimode']);
  });

  it('sets default language', () => {
    expect(instance.config.defaultLanguage).toBe('cimode');
  });
});
