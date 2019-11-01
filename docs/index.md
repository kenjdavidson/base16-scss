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

This project started off as a way in which to play with [Rouge](http://rouge.jneen.net/) highlighter themes within Jekyll - but it's turned into a method for getting Base16 themes into any Scss driven web project.   The goal became getting any Base16 theme available or developed to be available to all framework (Jekyll, Rouge, CSS, etc).  

## Configure

Configure the `$base16-scheme` map using the [Base16 Guidelines](https://github.com/chriskempson/base16/blob/master/styling.md) using a pre-made or custom set of colors (the default settings are [base16-default-dark](https://github.com/chriskempson/base16-default-schemes/blob/master/default-dark.yaml).

{% highlight scss %}
$base16-scheme: ( 
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

## Enjoy

All the guideline values will now be available in both `$base16-schema` or `--root: {}`.  Your Rouge highlights will now be displayed with the configured scheme.

{% highlight javascript %}
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

## More

After you've `@import "../highlight"` (on top of the aforementioned variables) you'll be able to create additional schemes and apply them to any Css selector you wish.  For more details on this see the [documents](docs/home/) pages.  Below the [base16-github](https://github.com/Defman21/base16-github-scheme/blob/master/github.yaml) scheme is applied to `#base16-github`:

<div id="base16-github">
{% highlight ruby %} 
require "gem"

number = 0
regexp = /[abc]/

# This is a comment
class Person
  attr_accessor :name
  
  def initialize(attributes = {})
    @name = attributes[:name]
  end
  
  def self.greet
    "hello"
  end
end

person1 = Person.new(:name => "Chris")
puts "#{Person::greet} #{person1.name}\n"
{% endhighlight %}
</div>
