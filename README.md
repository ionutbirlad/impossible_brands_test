# Impossible Brands Test Store Theme Customization

[![Build status](https://github.com/shopify/dawn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Shopify/dawn/actions/workflows/ci.yml?query=branch%3Amain)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=informational)](/.github/CONTRIBUTING.md)

## Overview

This repo is connected to [Impossible_Brands_Test_Store](https://impossible-brands-test-store.myshopify.com/) as a theme customization that starts from base Dawn Shopify theme.

The features to implement were the following:

#### Task 1

In the product page, implement an accordion component having 3 expandable sections with the following contents:

○ Section 1: The description of the product

○ Section 2: The type of the product

○ Section 3: The available colors, size and materials of the product
    
The component must be implemented by using the Web Components.

#### Task 2

(Optional) Only in the product page of T-shirt, implement on the top of the page a video that starts automatically when the page fully loads.

You can use any video.

To achieve this I've used the following:


### Shopify CLI

Used to automate and enhance the local development workflow by initializing the new theme using Dawn as a starting point, hot reloading CSS and section changes

when previewing the theme, pushing and publishing it from the command line and populating with test data.

### GraphQL Admin API

Used to create the requested products with the relative variants and options. The 4 modules used to run this can be found in [products directory](https://github.com/ionutbirlad/impossible_brands_test/tree/master/products).

### Web Components

Used with vanilla Javascipt in order to create a basic accordion wich was integrated in the theme as a section with its own [js file](https://github.com/ionutbirlad/impossible_brands_test/blob/master/assets/impossible-brands-accordion.js) and a [liquid file](https://github.com/ionutbirlad/impossible_brands_test/blob/master/sections/impossible-brands.liquid) so

that it can be loaded only when needed inside the relative schema.

### Dawn's video section

Considering there's already a section dedicated to the videos in the starting theme, I used that to implement a video only in the T-shirt prdouct view.

I created another template dedicated to the T-shirt to avoid loading js files to the other products ([product.only-tshirt.json](https://github.com/ionutbirlad/impossible_brands_test/blob/master/templates/product.only-tshirt.json)). Here I check if the metafield with the external video link is avalable.

If true section is rendered, otherwise it won't.
