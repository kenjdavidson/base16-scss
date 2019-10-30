---
layout: home
header: Base16 Scss Builder
subheader: Pull the Base16 theming architecture into your project through a set of Scss or Css variables.
link:
  url: /docs/home/
  name: Learn more
---

# Overview

This project started off as a way in which to play with [Rouge](http://rouge.jneen.net/) highlighter themes within Jekyll - but it's turned into a method for getting Base16 themes into any Scss driven web project.   At a high level to get started theming your projects you:

- [Clone](https://github.com/kenjdavidson/base16-scss.git) or download the project
- (Optionally) import the theme files
- Set the `$base16-scheme: ();` variable
- `import "./highlight.scss";` which will create the `:root{}` theme

For more details check out the [documents](/docs/home/) page.

# Previews

The following previews show how to use the project to theme alternate highlighter blocks or full web layouts:

## AngularJS w/ Base16-dark

<div id="base16-dark">
{%- highlight javascript %}
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
</div>

## Ruby w/ Base16-eighties

<div id="base16-eighties">
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
