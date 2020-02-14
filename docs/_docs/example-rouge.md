---
chapter: 
  title: Examples
  index: 1.2
title: Rouge Highlighter
layout: default
---

[Rouge](http://rouge.jneen.net/) is the primary highlighter used in Jekyll, for which this library was originally created.

### Javascript / Base16-dark

{% highlight javascript %}
let module = angular.module('moduleName`, []);

module.controller('testController', function($scope, testService){
    $scope.something = 'something else';
});

module.service('testService', function($http){
  return {
    getUsers: function() {
      return $http.get('/api/users');
    }
  };  
});
{% endhighlight %}


### Java / Base16-light

{:.base16-light}
{% highlight java linenos %}
@Entity
@Table(name="user") 
public class User {

  @Id
  @Column(name="user_id")
  private long userId;
}

@Path("/auth")
public class AuthApiImpl {

  @POST
  public Response<User> authenticate(AuthRequest auth) {
    // Perform authentication    
  }
}
{% endhighlight %}

### HTML / Base16-material
{% highlight html linenos %}
<!DOCTYPE html>
<html lang="en">
<head>

<script>
	// Just a lil’ script to show off that inline JS gets highlighted
	window.console && console.log('foo');
</script>
<meta charset="utf-8" />
<link rel="icon" href="favicon.png" />
<title>Prism</title>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="themes/prism.css" data-noprefix />
<script src="scripts/prefixfree.min.js"></script>

<script>var _gaq = [['_setAccount', 'UA-33746269-1'], ['_trackPageview']];</script>
<script src="https://www.google-analytics.com/ga.js" async></script>
</head>
{% endhighlight %}