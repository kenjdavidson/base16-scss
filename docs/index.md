---
layout: default
title: What is Base16 Scss
---

A [SCSS](https://sass-lang.com/) implementation of the [Base16](https://github.com/chriskempson/base16) builder [guidelines](https://github.com/chriskempson/base16/blob/master/styling.md).   Apply any number or configuration of schemes to your [Rouge](http://rouge.jneen.net/) highlight or apply to your full site by configuring framework variables to scheme colours.

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

{:.base16-mocha}
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

### Scheme Repository

Check out the full list of scheme repositories [https://github.com/chriskempson/base16#template-repositories](https://github.com/chriskempson/base16#template-repositories).