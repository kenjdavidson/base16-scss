---
title: Adding Schemes
permalink: /docs/schemes/
---

Once you've got the scheme you're looking for with regards to [Rouge](http://rouge.jneen.net/) highlighting, you can start to take this functionality a little bit further by creating multiple scheme maps and applying the built values to any number of selectors.  Googling around will provide a large number of already designed schemes:

- [https://github.com/chriskempson/base16#user-content-scheme-repositories](https://github.com/chriskempson/base16#user-content-scheme-repositories)
- [https://github.com/samme/base16-styles](https://github.com/samme/base16-styles)
- [https://github.com/tajmone/Base16-Sass](https://github.com/tajmone/Base16-Sass)

Creating an extra scheme is as easy as setting a map with the appropriate values.

## Adding Base16-Cupertino Scheme

Once you've picked or designed one, you can apply using the highlight helper mixin and function.  Using the [base16-cupertino](https://github.com/Defman21/base16-cupertino-scheme) scheme we can produce something that looks more Appl-ish:

<div class=".base16-cupertino">
{% highlight scss %}
$base16-cupertino: (
  base00: "1e1e1e",
  base01: "323537",
  base02: "464b50",
  base03: "5f5a60",
  base04: "838184",
  base05: "a7a7a7",
  base06: "c3c3c3",
  base07: "ffffff",
  base08: "cf6a4c",
  base09: "cda869",
  base0A: "f9ee98",
  base0B: "8f9d6a",
  base0C: "afc4db",
  base0D: "7587a6",
  base0E: "9b859d",
  base0F: "9b703f"
);

$base16-cupertino: apply-color-vars($base16-cupertino);
@include build-base16-scheme('#base16-cupertino', $base16-cupertino);
{% endhighlight %} 
</div>

## Applying Base16-Cupertino

The newly applied scheme will be available any highlight contained within the following element:

<div id="base16-cupertino">
{% highlight html %}
<!-- Will be applied using background-color: var(--base01) -->
<div id="base16-cupertino">
    ...
</div>
{% endhighlight %}
</div>

