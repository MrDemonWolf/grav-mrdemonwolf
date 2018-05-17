---
title: Blog
menu: Blog
header:
    enabled: true
    title: Blog
visible: false
seo:
    type: website
    description:
    keywords: blog
    image: seo.png
content:
  items: @self.children
  order:
    by: date
    dir: desc
  pagination: true
  limit: 10
simplesearch:
    filters:
        - @self
        - @taxonomy: [tag]
    filter_combinator: and
---
