---
chapter: 
  title: Getting Started
  index: 1.1
title: Installation
layout: default
---

This project bridges the gap between the available [Base16](http://chriskempson.com/projects/base16/) schemes and the ability and use those themes within all aspects of a Sass driving project.   The majority of usages found for Base16 themes are customizing applications that allow for theming: 

- editors
- terminals
- highlighters
- etc.

where the [Rouge highlighter](http://rouge.jneen.net/) seems to be the most prominent.  Using this project provides all the values from a [Base16 builder guidelines](https://github.com/chriskempson/base16/blob/master/builder.md) making them available within Scss and CSS.

#### Download & Setup

To get started download the project:

**Clone It**

Clone or download the project directly from the [Github](https://github.com/kenjdavidson/base16-scss) 

`git clone git@github.com:kenjdavidson/base16-scss.git`

**NPM It**

Grab the the project from [Github package registry using NPM](https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry)

`npm install @kenjdavidson/base16-scss`

#### Configure

There are a small number of variables that control the built schemes.  I'm hoping to expand upon them once the project starts getting a little more usage under it's belt.

**Font**

The following two variables can be overwritten to configure the highlight font

{% highlight SCSS %}
$highlight-font-family: 'Source Code Pro', monospace !default;
$highlight-font-size: 0.9em !default;
{% endhighlight %}

**Schemes**

There are two main scheme variables that are overridable.

{% highlight SCSS %}
$base16schemes: () !default;
$base16default: (':root': $base16-dark) !default;
$base16schemes: map-merge($base16default, $base16schemes);
{% endhighlight%}

In most cases `$base16schemes` should be overridden to create any number of possible schemes.  These will be merged with `$base16default` (which can also be overridden) to provide your own default.

In the following example, we will add the [base16-default-light](https://github.com/chriskempson/base16-default-schemes/blob/master/default-light.yaml), leaving `$base16dark` as the default `:root` scheme:

{% highlight SCSS %}
$base16-darklight: (
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

$base16schemes: ('.base16-dark-light', $base16-darklight);

@import "../base16-scss/base16scss";
{% endhighlight %}

#### CSS Variables

By using the above code not only will the Scss variables be available, but the following CSS variables will be available for use within your project:

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
    --base00-hex: 181818;
    --base00-hex-r: 18;
    --base00-hex-g: 18;
    --base00-hex-b: 18;
    --base00-hex-bgr: 181818;
    --base00-rgb-r: 24;
    --base00-rgb-g: 24;
    --base00-rgb-b: 24;
    --base00-dec-r: 0.0941176471;
    --base00-dec-g: 0.0941176471;
    --base00-dec-b: 0.0941176471;
    --base01-hex: 282828;
    --base01-hex-r: 28;
    --base01-hex-g: 28;
    --base01-hex-b: 28;
    --base01-hex-bgr: 282828;
    --base01-rgb-r: 40;
    --base01-rgb-g: 40;
    --base01-rgb-b: 40;
    --base01-dec-r: 0.1568627451;
    --base01-dec-g: 0.1568627451;
    --base01-dec-b: 0.1568627451;
    --base02-hex: 383838;
    --base02-hex-r: 38;
    --base02-hex-g: 38;
    --base02-hex-b: 38;
    --base02-hex-bgr: 383838;
    --base02-rgb-r: 56;
    --base02-rgb-g: 56;
    --base02-rgb-b: 56;
    --base02-dec-r: 0.2196078431;
    --base02-dec-g: 0.2196078431;
    --base02-dec-b: 0.2196078431;
    --base03-hex: 585858;
    --base03-hex-r: 58;
    --base03-hex-g: 58;
    --base03-hex-b: 58;
    --base03-hex-bgr: 585858;
    --base03-rgb-r: 88;
    --base03-rgb-g: 88;
    --base03-rgb-b: 88;
    --base03-dec-r: 0.3450980392;
    --base03-dec-g: 0.3450980392;
    --base03-dec-b: 0.3450980392;
    --base04-hex: b8b8b8;
    --base04-hex-r: b8;
    --base04-hex-g: b8;
    --base04-hex-b: b8;
    --base04-hex-bgr: b8b8b8;
    --base04-rgb-r: 184;
    --base04-rgb-g: 184;
    --base04-rgb-b: 184;
    --base04-dec-r: 0.7215686275;
    --base04-dec-g: 0.7215686275;
    --base04-dec-b: 0.7215686275;
    --base05-hex: d8d8d8;
    --base05-hex-r: d8;
    --base05-hex-g: d8;
    --base05-hex-b: d8;
    --base05-hex-bgr: d8d8d8;
    --base05-rgb-r: 216;
    --base05-rgb-g: 216;
    --base05-rgb-b: 216;
    --base05-dec-r: 0.8470588235;
    --base05-dec-g: 0.8470588235;
    --base05-dec-b: 0.8470588235;
    --base06-hex: e8e8e8;
    --base06-hex-r: e8;
    --base06-hex-g: e8;
    --base06-hex-b: e8;
    --base06-hex-bgr: e8e8e8;
    --base06-rgb-r: 232;
    --base06-rgb-g: 232;
    --base06-rgb-b: 232;
    --base06-dec-r: 0.9098039216;
    --base06-dec-g: 0.9098039216;
    --base06-dec-b: 0.9098039216;
    --base07-hex: f8f8f8;
    --base07-hex-r: f8;
    --base07-hex-g: f8;
    --base07-hex-b: f8;
    --base07-hex-bgr: f8f8f8;
    --base07-rgb-r: 248;
    --base07-rgb-g: 248;
    --base07-rgb-b: 248;
    --base07-dec-r: 0.9725490196;
    --base07-dec-g: 0.9725490196;
    --base07-dec-b: 0.9725490196;
    --base08-hex: ab4642;
    --base08-hex-r: ab;
    --base08-hex-g: 46;
    --base08-hex-b: 42;
    --base08-hex-bgr: 4246ab;
    --base08-rgb-r: 171;
    --base08-rgb-g: 70;
    --base08-rgb-b: 66;
    --base08-dec-r: 0.6705882353;
    --base08-dec-g: 0.2745098039;
    --base08-dec-b: 0.2588235294;
    --base09-hex: dc9656;
    --base09-hex-r: dc;
    --base09-hex-g: 96;
    --base09-hex-b: 56;
    --base09-hex-bgr: 5696dc;
    --base09-rgb-r: 220;
    --base09-rgb-g: 150;
    --base09-rgb-b: 86;
    --base09-dec-r: 0.862745098;
    --base09-dec-g: 0.5882352941;
    --base09-dec-b: 0.337254902;
    --base0A-hex: f7ca88;
    --base0A-hex-r: f7;
    --base0A-hex-g: ca;
    --base0A-hex-b: 88;
    --base0A-hex-bgr: 88caf7;
    --base0A-rgb-r: 247;
    --base0A-rgb-g: 202;
    --base0A-rgb-b: 136;
    --base0A-dec-r: 0.968627451;
    --base0A-dec-g: 0.7921568627;
    --base0A-dec-b: 0.5333333333;
    --base0B-hex: a1b56c;
    --base0B-hex-r: a1;
    --base0B-hex-g: b5;
    --base0B-hex-b: 6c;
    --base0B-hex-bgr: 6cb5a1;
    --base0B-rgb-r: 161;
    --base0B-rgb-g: 181;
    --base0B-rgb-b: 108;
    --base0B-dec-r: 0.631372549;
    --base0B-dec-g: 0.7098039216;
    --base0B-dec-b: 0.4235294118;
    --base0C-hex: 86c1b9;
    --base0C-hex-r: 86;
    --base0C-hex-g: c1;
    --base0C-hex-b: b9;
    --base0C-hex-bgr: b9c186;
    --base0C-rgb-r: 134;
    --base0C-rgb-g: 193;
    --base0C-rgb-b: 185;
    --base0C-dec-r: 0.5254901961;
    --base0C-dec-g: 0.7568627451;
    --base0C-dec-b: 0.7254901961;
    --base0D-hex: 7cafc2;
    --base0D-hex-r: 7c;
    --base0D-hex-g: af;
    --base0D-hex-b: c2;
    --base0D-hex-bgr: c2af7c;
    --base0D-rgb-r: 124;
    --base0D-rgb-g: 175;
    --base0D-rgb-b: 194;
    --base0D-dec-r: 0.4862745098;
    --base0D-dec-g: 0.6862745098;
    --base0D-dec-b: 0.7607843137;
    --base0E-hex: ba8baf;
    --base0E-hex-r: ba;
    --base0E-hex-g: 8b;
    --base0E-hex-b: af;
    --base0E-hex-bgr: af8bba;
    --base0E-rgb-r: 186;
    --base0E-rgb-g: 139;
    --base0E-rgb-b: 175;
    --base0E-dec-r: 0.7294117647;
    --base0E-dec-g: 0.5450980392;
    --base0E-dec-b: 0.6862745098;
    --base0F-hex: a16946;
    --base0F-hex-r: a1;
    --base0F-hex-g: 69;
    --base0F-hex-b: 46;
    --base0F-hex-bgr: 4669a1;
    --base0F-rgb-r: 161;
    --base0F-rgb-g: 105;
    --base0F-rgb-b: 70;
    --base0F-dec-r: 0.631372549;
    --base0F-dec-g: 0.4117647059;
    --base0F-dec-b: 0.2745098039;
}
{% endhighlight %}

