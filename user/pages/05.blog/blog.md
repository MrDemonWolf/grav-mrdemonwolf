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
    image:
content:
  items: '@self.children'
  order:
    by: header.date
    dir: desc
  pagination: true
  limit: 10
---
