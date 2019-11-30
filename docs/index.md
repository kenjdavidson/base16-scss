---
layout: home
title: Overview
header: Base16 Scss Builder
subheader: Pull the Base16 theming architecture into your project through a set of Scss or Css variables.
link:
  url: /docs/home/
  name: Learn more
---

# Overview

This project started off as a way in which to play with [Rouge](http://rouge.jneen.net/) highlighter themes within Jekyll - but it's turned into something entirely different.  While playing with Jekyll and Rouge I came across the [Base16 project](https://github.com/chriskempson/base16) and decided that it would be an interesting an idea to attempt and implement into a project making the themes available web projects.

## Conversion

The project converts your configured schemes into CSS selector variables following the [Base16 Guidelines](https://github.com/chriskempson/base16/blob/master/styling.md).  For example, the following:

{% highlight ruby %}
@import "base16scss/schemes/base16";

$base16schemes: (
  '.base16-dark': $base16-dark
);

@import "base16scss/base16scss";
{% endhighlight %}

is converted into the following CSS (where the default :root selector is based on the base16-github scheme):

{% highlight css %}
:root { --base00: #ffffff; --base01: #f5f5f5; --base02: #c8c8fa; ... }

.base16-dark { --base00: #181818; --base01: #282828; --base02: #383838; ... }
{% endhighlight %}

## Application

The newly converted `$base16schemes` and CSS variables can now be applied across your application.   The standard `:root {}` values are based off the [base16-github](https://github.com/Defman21/base16-github-scheme) scheme, but to override it for a specific code block (say we want javascript to be base16 dark) the following is possible:

{:.base16-dark}
{% highlight javascript linenos %}
angular.module('UserModule', [])
  .service('UserService', ['$http', function($http){
    return {
      getUsers: function() {
        return $http.get('/users');
      }
    }    
  }])
  .controller('UserController', ['UserService', function(userService){
    var $ctrl = this;
    $ctrl.$onInit = function() {
      userService.getUsers().then(function(result){
        $ctrl.users = result.data;
      }).catch(function(err){
        console.log(err);
      })
    };
  }]);
{%- endhighlight -%}

Using the the markup:


{% highlight shell linenos %}
{% raw %}
{:.base16-dark}
{% highlight javascript %}
angular.module('UserModule', [])
  .service('UserService', ['$http', function($http){
    return {
      getUsers: function() {
        return $http.get('/users');
...
{% endhighlight %} 
{% endraw %}
{% endhighlight %}