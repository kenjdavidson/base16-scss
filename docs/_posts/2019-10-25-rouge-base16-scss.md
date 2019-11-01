---
layout: post
title:  "Base16 Scss Builder"
date:   2019-10-25 20:09:11 -0400
categories: jekyll update
---
After playing around with [Github Pages][jekyll-gh] and [Jekyll][jekyll-docs] I started to find that the ones that I was a fan of were pretty static in their configuration, mainly with regards to the CSS frameworks that were chosen and their lack of [SCSS][scss].  My goal was to replicate the [swanson/lagom][lagom] theme to use Sierra, following the rabbit hole a little futher I started playing with the [Rouge][rouge] highlighter and it's customization.  A little bit further down and I realized the Base16 guidelines would be perfect for running full sites (not just highlighting) - since I couldn't find any while working on my Jekyll theme, I figured I'd take a few days to implement it.

**Edit 19/10/23** after looking around a little more I found a couple of sass projects based on Base16, which are available to be imported into this, without any issue and provide a substantial number of schemes.

- [https://github.com/samme/base16-styles](https://github.com/tajmone/Base16-Sass)
- [https://github.com/tajmone/Base16-Sass](https://github.com/tajmone/Base16-Sass)


Here's a quick rundown of how things were planned out, for more info check out the [docs]({{ site.baseurl }}/docs).

## [Base16](#base16)

[Base16][base16] is an architecture for designing themes - thanks to the rabbit hole that is the internet - that is used for a number of applications.  The Base16 architecture describes guidelines for [building][base16-builder] and [styling][base16-styling].

TLDR; pick 16 colors an assign them to 16 variables which have been predetermined for specific parts of an application.

## [SCSS](#scss)

By implementing the Base 16 guidelines in SCSS, the theming architecture becomes available to a number of high profile (and low profile) CSS frameworks:

- Bootstrap
- Foundation
- Sierra
- Etc.

To manage the Base16 the library makes all the Base16 variables available to SCSS using a the map `$base16-colors` ([SCSS variables][scss-variables]) by using the appropriate hex values - these can be easily copied from already created scheme files (don't forget the commas) or designed on their own.

{% highlight scss %}
$base16-colors: (
	base00: "181818",
	base01: "282828",
	base02: "383838",
	base03: "585858",
	base04: "b8b8b8",
	base05: "d8d8d8",
	base06: "e8e8e8",
	base07: "f8f8f8",
	base08: "ab4642",
	base09: "dc9656",
	base0A: "f7ca88",
	base0B: "a1b56c",
	base0C: "86c1b9",
	base0D: "7cafc2",
	base0E: "ba8baf",
	base0F: "a16946"	
) !default;
{% endhighlight %}

## [CSS](#css)

The same variables are made available using [CSS variables][css-variables] within the `:root {}` element.  Using the available functions and mixins different color themes can be applied to any other CSS element.  

{% highlight css %}
:root {
  --base00: #181818;
  --base01: #282828;
  --base02: #383838;
  --base03: #585858;
  --base04: #b8b8b8;
  --base05: #d8d8d8;
  --base06: #e8e8e8;
  --base07: #f8f8f8;
  --base08: #ab4642;
  --base09: #dc9656;
  --base0A: #f7ca88;
  --base0B: #a1b56c;
  --base0C: #86c1b9;
  --base0D: #7cafc2;
  --base0E: #ba8baf;
  --base0F: #a16946;
}
{% endhighlight %}

For more information check out the [docs]({{ site.baseurl }}/docs).


[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[lagom]: https://github.com/swanson/lagom
[scss]: https://sass-lang.com/
[sierra]: https://sierra-library.github.io/
[rouge]: http://rouge.jneen.net/
[base16]: http://chriskempson.com/projects/base16/
[base16-builder]: https://github.com/chriskempson/base16/blob/master/builder.md
[base16-styling]: https://github.com/chriskempson/base16/blob/master/styling.md
[scss-variables]: https://sass-lang.com/documentation/variables
[css-variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties