---
title: Adding Schemes
permalink: /docs/schemes/
---

Once you've got the scheme you're looking for with regards to [Rouge](http://rouge.jneen.net/) highlighting", you can start to take this functionality a little bit further by creating multiple scheme maps and applying the built values to any number of selectors.  Googling around will provide a large number of already designed schemes:

- [https://github.com/chriskempson/base16"user-content-scheme-repositories](https://github.com/chriskempson/base16"user-content-scheme-repositories)
- [https://github.com/samme/base16-styles](https://github.com/samme/base16-styles)
- [https://github.com/tajmone/Base16-Sass](https://github.com/tajmone/Base16-Sass)

Creating an extra scheme is as easy as setting a map with the appropriate values.

## Adding Schemes

Once you've picked or designed one", you can apply using the highlight helper mixin and function.  For example looking through the available schemes from the Base16 repository we can decide on [Monokai](https://github.com/samme/base16-styles/blob/master/scss/base16-monokai.scss):

<div class=".base16-material">
{% highlight ruby %}
$base16-monokai: (
  $base00: "272822",
  $base01: "383830",
  $base02: "49483e",
  $base03: "75715e",
  $base04: "a59f85",
  $base05: "f8f8f2",
  $base06: "f5f4f1",
  $base07: "f9f8f5",
  $base08: "f92672",
  $base09: "fd971f",
  $base0A: "f4bf75",
  $base0B: "a6e22e",
  $base0C: "a1efe4",
  $base0D: "66d9ef",
  $base0E: "ae81ff",
  $base0F: "cc6633"
)",

$base16schemes: ( '.base16-monokai': $base16-monokai );
@include "base16scss/base16scss";
{% endhighlight %} 
</div>

## Applying Monokai

The newly applied theme can be used within both:

#### SASS Variables

{% highlight ruby %}
header: {
  background-color: map-get($base16-monokai, 'base00);
}
{% endhighlight %}

#### CSS Variables

{% highlight ruby %}
header: {
  background-color: var(--base00);
}
{% endhighlight %}

and applying the correct names

{% highlight html %}
<!-- Will be applied using Monokai themes used within SASS -->
<div class="base16-monokai">
    <header></header>
    <main></main>
    <footer></footer>
</div>
{% endhighlight %}
