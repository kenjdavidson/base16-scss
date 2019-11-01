---
title: Getting Started
permalink: /docs/home/
redirect_from: /docs/index.html
---

This project bridges the gap between the available [Base16](http://chriskempson.com/projects/base16/) schemes and the ability and use those themes within all aspects of a Sass driving project.   The majority of usages found for Base16 themes are customizing applications that allow for theming: 

- editors
- terminals
- highlighters
- etc.

where the [Rouge highlighter](http://rouge.jneen.net/) seems to be the most prominent.  Using this project provides all the values from a [Base16 builder guidelines](https://github.com/chriskempson/base16/blob/master/builder.md) making them available within Scss and CSS.

## Download & Setup

To get started download the project:

#### Clone it

Clone or download the project directly from the [Github](https://github.com/kenjdavidson/base16-scss) 

`git clone git@github.com:kenjdavidson/base16-scss.git`

#### NPM it

Grab the the project from [Github package registry using NPM](https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry)

`npm install @kenjdavidson/base16-scss`

## Configure & Import

Reconfigure the default theme and import the highlight.scss file, the default scheme is [base16-default-dark](https://github.com/chriskempson/base16-default-schemes/blob/master/default-dark.yaml).  For example, if we wanted to override with [base16-default-light](https://github.com/chriskempson/base16-default-schemes/blob/master/default-light.yaml) we would replace the contents and then import:

{% highlight scss %}
$base16-scheme: (
    base00: "f8f8f8"
    base01: "e8e8e8"
    base02: "d8d8d8"
    base03: "b8b8b8"
    base04: "585858"
    base05: "383838"
    base06: "282828"
    base07: "181818"
    base08: "ab4642"
    base09: "dc9656"
    base0A: "f7ca88"
    base0B: "a1b56c"
    base0C: "86c1b9"
    base0D: "7cafc2"
    base0E: "ba8baf"
    base0F: "a16946"	
);

@import "../base16-scss/highlight";
{% endhighlight %}


