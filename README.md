4-column Pricing Page
==================

#### Example of image on pricing page
See how to use the pricing page component to add an image

[Live Demo](https://example-of-image-on-pricing-page.vercel.app/pricing)

## How to add an image to the pricing plans

1. Update the `PricingTier` interface

```tsx
export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
  image?: React.ReactNode;
}
```

2. Add the image to each of the items in the `pricingTiers` array

```tsx
export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: '0',
    href: '/subscribe',
    price: { '1': '$0', '2': '$0' },
    discountPrice: { '1': '', '2': '' },
    description: `Get all goodies for free, no credit card required.`,
    features: [
      `Multi-platform compatibility`,
      `Real-time notification system`,
      `Advanced user permissions`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Sign up`,
    image: <img src="/static/images/backdrop-1.webp" alt="Free" />,
  },
  // ...
  // do the same for the other items if any
];
```

3. Add the image to the pricing page `app/pricing/page.tsx`

```tsx
// ...find where the description is rendered and add {image} under it (or anywhere you want the image to be displayed)
    <p
      className={cn(
        tier.featured
          ? 'text-gray-300 dark:text-gray-500'
          : 'text-gray-600 dark:text-gray-400',
        'mt-4 text-sm leading-6',
      )}
    >
      {tier.description}

      {/* Display the image here */}
      {tier.image}
    </p>
// ...
```

> This website was generated with [shipixen.com](https://shipixen.com).
> For more documentation, visit [the shipixen Docs](https://shipixen.com/boilerplate-documentation).

- [How to add an image to the pricing plans](#how-to-add-an-image-to-the-pricing-plans)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deploy](#deploy)
- [Extend / Customize](#extend--customize)
- [Post](#post)
- [Frequently Asked Questions](#frequently-asked-questions)
  - [How can I add a custom MDX component?](#how-can-i-add-a-custom-mdx-component)
  - [How can I add a blog layout?](#how-can-i-add-a-blog-layout)
  - [How to add meta tags?](#how-to-add-meta-tags)

## Installation

```bash
npm i
```

## Development

First, run the development server:

```bash
npm run dev
```

## Build

To build the site for production, run the following command:

```bash
npm run build
```


## Deploy

**Vercel**

The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Netlify**

[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

**Static hosting services / GitHub Pages / S3 / Firebase etc.**

See [documentation](https://shipixen.com/boilerplate-documentation/other-deployment-options#main) for more information on deploying to other services.


## Extend / Customize
See [configuration docs](https://shipixen.com/boilerplate-documentation/configuration#main).

Also check out:
- [Customizing the landing page](https://shipixen.com/boilerplate-documentation/customizing-landing-page#main) - how to customize the landing page
- [Landing page component examples](https://shipixen.com/demo/landing-page-component-examples)
- [Landing page templates](https://shipixen.com/demo/landing-page-templates)
- [Component explorer](https://shipixen.com/component-explorer-shadcn) - an overview of all UI components available in the template
- [Color theme explorer](https://shipixen.com/color-theme-explorer-shadcn)
- [Pricing page generator](https://shipixen.com/shadcn-pricing-page)

## Post

Posts on the Shipixen blog are written in Markdown and stored in the /data directory. To create a new post, make a new .mdx file in the /data directory.

Learn [how to write blog posts](https://shipixen.com/boilerplate-documentation/using-the-shipixen-blog#main) in mdx.

Content is modelled using [Contentlayer](https://www.contentlayer.dev/), which allows you to define your own content schema and use it to generate typed content objects. See [Contentlayer documentation](https://www.contentlayer.dev/docs/getting-started) for more information.

## Frequently Asked Questions

### How can I add a custom MDX component?
You need to include the component under `components/MDXComponents.tsx`.

See [a full example here](https://shipixen.com/boilerplate-documentation/creating-a-blog-mdx-component#main).

### How can I add a blog layout?
See [this tutorial on how to add a blog layout](https://shipixen.com/boilerplate-documentation/creating-a-layout#main).

### How to add meta tags?
There's a utility function, `getPageMetadata` that makes it easy to add meta tags to your pages. See [this tutorial](https://shipixen.com/boilerplate-documentation/adding-metas-to-a-page#main) for more information.
