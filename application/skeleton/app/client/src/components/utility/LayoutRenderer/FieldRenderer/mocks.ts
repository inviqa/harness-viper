import { fieldRenderers } from './default-field-renderers.config';

export const defaultWithLabel = {
  component: {
    configuration: { displayLabel: true },
    label: 'Label for some field',
    component: 'someField'
  },
  data: { someField: 'Lorem ipsum dolor...' },
  renderers: fieldRenderers
} as const;

export const defaultWithoutLabel = {
  component: {
    configuration: { displayLabel: false },
    label: 'Label for some field',
    component: 'someField'
  },
  data: { someField: 'Lorem ipsum dolor...' },
  renderers: fieldRenderers
} as const;

export const title = {
  component: {
    configuration: { displayLabel: false },
    label: 'Title',
    component: 'title'
  },
  data: { title: 'Some page title' },
  renderers: fieldRenderers,
  inline: false
} as const;

export const image = {
  component: {
    configuration: { displayLabel: false },
    label: 'Image',
    component: 'image'
  },
  data: {
    image: {
      alt: 'Image',
      sizes: [
        {
          width: 640,
          size: 'mobile',
          url: 'https://picsum.photos/seed/viper/640/853'
        },
        {
          width: 1280,
          size: 'mobileRetina',
          url: 'https://picsum.photos/seed/viper/1280/1706'
        },
        {
          width: 1024,
          size: 'desktop',
          url: 'https://picsum.photos/seed/viper/1024/768'
        },
        {
          width: 2048,
          size: 'desktopRetina',
          url: 'https://picsum.photos/seed/viper/2048/1536'
        }
      ]
    }
  },
  renderers: fieldRenderers,
  inline: false
} as const;

export const html = {
  component: {
    configuration: { displayLabel: false },
    label: 'Body',
    component: 'body'
  },
  data: {
    body: {
      html: `<h1>Lorem ipsum</h1><p>Abico aliquam appellatio cui imputo iriure nostrud probo. Acsi bene nulla praemitto ullamcorper veniam verto. Dolor ea feugiat occuro plaga refero virtus. Cogo commoveo eu mauris meus paratus quidem. Accumsan facilisi interdico volutpat. Abluo consectetuer dolor ille lobortis nisl os pala usitas.</p>\n<p>Defui genitus ideo importunus loquor oppeto ratis scisco suscipit. Distineo ea fere jugis quia secundum sudo ut vicis. Commodo fere verto. Diam duis genitus gilvus illum letalis oppeto tego usitas vicis. Humo in letalis paratus quadrum similis vindico.</p>\n<p>Adipiscing augue exerci refoveo vero. Premo quibus volutpat. Ille iriure lobortis minim velit. Acsi fere imputo in laoreet qui similis suscipere vel velit. Comis iustum vindico. Enim iriure magna. Aliquam eligo hendrerit ibidem immitto modo molior quia quidne refoveo. Adipiscing exputo lenis proprius velit vero volutpat. Luptatum nostrud refoveo si vero.</p>\n<p>Ad facilisi iaceo immitto imputo iriure odio paulatim sino tincidunt. Abdo abico accumsan comis esse feugiat ibidem minim olim saluto. Lobortis occuro quae quidne typicus vulputate. Iriure nibh paulatim tation. Brevitas mos neque. Abigo aliquip consectetuer eu jugis loquor plaga quadrum scisco sudo. Camur consectetuer dignissim euismod fere jugis si. Aliquip dolor haero ideo praesent probo quis scisco valetudo.</p>\n<p>Comis cui esca euismod illum jus quae qui sudo utrum. Eum iusto lucidus quibus vero virtus volutpat. Aptent brevitas capto euismod humo incassum paulatim premo sino tation. Accumsan aliquam commodo exerci letalis paratus. Defui jus letalis lucidus metuo natu quae turpis ulciscor velit.</p>\n<p>Abbas esse huic lobortis quae vero. Abluo eu hendrerit iriure letalis nibh plaga sagaciter te. Aliquam aptent cui eros illum occuro sudo. Camur defui euismod exerci immitto nimis similis tation. Dolor enim huic jumentum natu probo singularis valetudo veniam. Esse iustum melior natu tego.</p>\n<p>Aptent decet gemino luptatum neque paratus pecus premo. Acsi aliquip ea esca modo. Consectetuer erat nibh oppeto voco wisi. Autem caecus capto illum sit validus. Conventio huic velit. Natu paulatim scisco usitas. Abdo cui iaceo si. Defui eum haero jumentum refero si tation velit. At bene huic in incassum interdico iustum jugis voco.</p>\n<p>Blandit camur dignissim eros. Consequat distineo eros eu iriure loquor magna nimis. Abdo acsi metuo oppeto sino veniam. Cogo conventio illum iustum nunc obruo tum ut vindico. Aliquam autem natu praemitto singularis ut veniam vereor. Ad capto hendrerit iaceo ibidem laoreet magna te tincidunt virtus.</p>\n<p>Dolore esse genitus jugis loquor proprius quia. Conventio illum jus natu paulatim pecus utinam. Cogo ibidem lenis loquor occuro valde vicis. Dolus ea hendrerit modo molior. Duis esca et hendrerit minim molior os persto pertineo pneum. Abico macto obruo pala refoveo scisco suscipit.</p>\n<p>Abdo eum exputo facilisis interdico letalis melior nimis quae sit. Defui dignissim feugiat humo minim praemitto secundum sudo ulciscor venio. Fere iusto voco. Aliquam aliquip antehabeo cui feugiat inhibeo loquor luctus typicus veniam. Humo quadrum ulciscor wisi. Consectetuer eligo iaceo importunus nobis occuro plaga scisco suscipere.</p>\n<p>Aptent causa defui ea elit facilisis ideo mauris pecus vindico. Amet cui hos iustum jumentum laoreet meus. Exerci magna nunc tamen tego venio. Abdo abluo elit loquor usitas.</p>\n<p>Aliquam cui gilvus hendrerit lucidus tincidunt. Abdo aliquam dolus neque plaga typicus. Dolor eligo iustum odio olim quidem. Adipiscing decet in jugis molior praesent qui secundum sino vulputate.</p>\n`
    }
  },
  renderers: fieldRenderers,
  inline: false
} as const;

export const author = {
  component: {
    configuration: { displayLabel: true },
    label: 'Authored by',
    component: 'author'
  },
  data: { author: { name: 'Jane Doe' } },
  renderers: fieldRenderers,
  inline: true
} as const;

export const createdAtWithLabel = {
  component: {
    configuration: { displayLabel: true },
    label: 'Created',
    component: 'createdAt'
  },
  data: { createdAt: '2020-01-17T00:41:29.400Z' },
  renderers: fieldRenderers,
  inline: true
} as const;

export const createdAtWithoutLabel = {
  component: {
    configuration: { displayLabel: false },
    label: 'Created',
    component: 'createdAt'
  },
  data: { createdAt: '2020-01-17T00:41:29.400Z' },
  renderers: fieldRenderers,
  inline: true
} as const;
