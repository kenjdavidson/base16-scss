---
chapter: 
  title: Eamples
  index: 1.3
title: Prism JS
layout: prismjs
---

[PrismJS](https://prismjs.com/) is a JavaScript based highlighter which is used pretty much everywhere on the internet.  The need for PrismJS became apparent when I started playing with [Gatsby](https://www.gatsbyjs.org/).

### Javascript / Base16-dark

<pre rel="Javascript" class="language-javascript">
<code class="language-javascript">
let module = angular.module('moduleName`, []);

// Test Controller
module.controller('testController', function($scope){
    $scope.something = 'something else';
});
</code>
</pre>


### Java / Base16-light

<div class="base16-light">
<pre rel="Java" class="line-numbers language-java">
<code class="language-java">
@Entity
@Table(name="user") 
public class User {

  @Id
  @Column(name="user_id")
  private long userId;
}

/**
 * Just a javadoc comment
 */
@Path("/auth")
public class AuthApiImpl {

  @POST
  public Response&lt;User&gt; authenticate(AuthRequest auth) {
    // Perform authentication    
  }
}
</code>
</pre> 
</div>


### HTML / Base16-material

<div class="base16-material-light">
<pre rel="HTML" class="line-numbers language-html">
<code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;

&lt;script&gt;
	// Just a lil’ script to show off that inline JS gets highlighted
	window.console && console.log('foo');
&lt;/script&gt;
&lt;meta charset="utf-8" /&gt;
&lt;link rel="icon" href="favicon.png" /&gt;
&lt;title&gt;Prism&lt;/title&gt;
&lt;link rel="stylesheet" href="style.css" /&gt;
&lt;link rel="stylesheet" href="themes/prism.css" data-noprefix /&gt;
&lt;script src="scripts/prefixfree.min.js"&gt;&lt;/script&gt;

&lt;script&gt;var _gaq = [['_setAccount', 'UA-33746269-1'], ['_trackPageview']];&lt;/script&gt;
&lt;script src="https://www.google-analytics.com/ga.js" async&gt;&lt;/script&gt;
&lt;/head&gt;
</code>
</pre> 
</div>