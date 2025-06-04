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


-----------------

Save 100s of hours of work by using Page AI to generate a beautiful website. In just minutes!

| | |
| :- | :- |
| <a href="https://pageai.pro" target="_blank"><img height="60px" src="https://pageai.pro/static/images/logo-square.png" alt="Page AI Logo" /></a> <br/> <b>Page AI</b> <br/> AI Website Generator that designs and writes clean code. <br/><br/> Try the app on <a href="https://pageai.pro">pageai.pro</a>. | <a href="https://pageai.pro" target="_blank"><img width="300px" src="https://user-images.githubusercontent.com/1515742/281077548-57b24773-3c2a-4e89-b088-cc3945d7037b.png" alt="Page AI Logo" /></a> |

-----------------

Apihustle is a collection of tools to test, improve and get to know your API inside and out. <br/>
[apihustle.com](https://apihustle.com) <br/>

|                                                                                                                                                                                        |              |                                                          |                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- | :------------------------------------------------------- | :------------------------------------------- |
| <a href="https://pageai.pro" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/9bfbfe6f-add9-45de-aaf2-5c6043a47e41" alt="Page AI Logo" /></a>        | **Page AI**  | AI Website Generator that designs and writes clean code. | [pageai.pro](https://pageai.pro)             |
| <a href="https://shipixen.com" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/e1deba72-328e-4d3c-9c62-11ab77184561" alt="Shipixen Logo" /></a>     | **Shipixen** | Create a personalized blog & landing page in minutes     | [shipixen.com](https://shipixen.com)         |
| <a href="https://pageui.dev" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/b8815b62-598a-4fca-bc27-c03e66c8b105" alt="Page UI Logo" /></a>        | **Page UI**  | Landing page UI components for React & Next.js           | [pageui.dev](https://pageui.dev)             |
| <a href="https://clobbr.app" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/cb3e64e2-efaa-436b-ae6d-0ea4b47e4004" alt="Clobbr Logo" /></a>         | **Clobbr**   | Load test your API endpoints.                            | [clobbr.app](https://clobbr.app)             |
| <a href="https://crontap.com" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/38a3d734-d1ca-4f92-9cfb-ada52b9f2ffb" alt="Crontap Logo" /></a>       | **Crontap**  | Schedule API calls using cron syntax.                    | [crontap.com](https://crontap.com)           |
| <a href="https://tool.crontap.com" target="_blank"><img  width="54px" src="https://github.com/user-attachments/assets/545f7618-ff2c-47fa-ad17-e17e38155f55" alt="CronTool Logo" /></a> | **CronTool** | Debug multiple cron expressions on a calendar.           | [tool.crontap.com](https://tool.crontap.com) |

-----------------

<a href="https://apihustle.com" target="_blank">
  <img height="60px" src="https://user-images.githubusercontent.com/1515742/215217833-c07183d2-f688-4d1c-86ea-329f3b28f81c.svg" alt="Apihustle Logo" />
</a>

-----------------

