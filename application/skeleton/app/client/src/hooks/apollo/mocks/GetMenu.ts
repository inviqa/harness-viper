import { GetMenuDocument, GetMenuQuery, GetMenuQueryVariables } from '../generated';

export const defaultMenu = {
  name: 'Main Menu',
  items: [
    {
      name: 'Menu item 1',
      link: '/',
      level: 1,
      items: [
        {
          name: 'Menu item 1-1',
          link: '/',
          level: 2,
          items: []
        },
        {
          name: 'Menu item 1-2',
          link: '/',
          level: 2,
          items: []
        },
        {
          name: 'Menu item 1-3',
          link: '/',
          level: 2,
          items: [
            {
              name: 'Menu item 1-3-1',
              link: '/',
              level: 3,
              items: []
            },
            {
              name: 'Menu item 1-3-2',
              link: '/',
              level: 3,
              items: []
            },
            {
              name: 'Menu item 1-3-3',
              link: '/',
              level: 3,
              items: []
            }
          ]
        }
      ]
    },
    {
      name: 'Menu item 2',
      link: '/',
      level: 1,
      items: []
    },
    {
      name: 'Menu item 3',
      link: '/',
      level: 1,
      items: [
        {
          name: 'Menu item 3-1',
          link: '/',
          level: 2,
          items: []
        },
        {
          name: 'Menu item 3-2',
          link: '/',
          level: 2,
          items: []
        },
        {
          name: 'Menu item 3-3',
          link: '/',
          level: 2,
          items: [
            {
              name: 'Menu item 3-3-1',
              link: '/',
              level: 3,
              items: []
            },
            {
              name: 'Menu item 3-3-2',
              link: '/',
              level: 3,
              items: []
            },
            {
              name: 'Menu item 3-3-3',
              link: '/',
              level: 3,
              items: []
            }
          ]
        }
      ]
    }
  ]
};

export const getMenuMock = ({
  name,
  menu = defaultMenu
}: Partial<GetMenuQueryVariables> & Partial<GetMenuQuery> = {}) => ({
  request: { query: GetMenuDocument, variables: { name } },
  result: { data: { menu } }
});
