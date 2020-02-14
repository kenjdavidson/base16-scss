---
layout: default
title: What is Base16 Scss
---

A [SCSS](https://sass-lang.com/) implementation of the [Base16](https://github.com/chriskempson/base16) builder [guidelines](https://github.com/chriskempson/base16/blob/master/styling.md).   With built in support for [Rouge](http://rouge.jneen.net/) and [PrismJS](https://prismjs.com/) highlighters.

Using the builder implementations laid out by Base16 all the appropriate SCSS and CSS variables are created.  If importing `rouge.scss` or `prismjs.scss` the created styles are applied. 

### Default Schemes

The [default base16](https://github.com/chriskempson/base16-default-schemes) are provided (along with Github & Material) with the standard `@import "base16scss";`.

**base16-dark** (default)

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

**base16-light**

{:.base16-light}
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

**base16-ocean**

{:.base16-ocean}
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

**base16-mocha**

Also works with {% raw %}```javascript{% endraw %} 

{:.base16-mocha}
```javascript
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
```

### Scheme Repository

Check out the full list of scheme repositories [https://github.com/chriskempson/base16#template-repositories](https://github.com/chriskempson/base16#template-repositories).