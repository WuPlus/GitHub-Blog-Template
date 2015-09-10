---
layout: post
title: 14 Javascript Quiz with Answers
description: 14 Javascript Quiz
category: Blog
---
<pre>
<code class='javascript'>(function(){
    return typeof arguments;
  })();
</code>
</pre>
Answer: 'object'

<pre>
<code class='javascript'>var f = function g(){ return 23; };
  typeof g();
</code>
</pre>
Answer: Error

<pre>
<code class='javascript'>(function(x){
    delete x;
    return x;
  })(1);
</code>
</pre>
Answer: 1
<!-- more -->
<pre>
<code class='javascript'>var y = 1, x = y = typeof x;
  x;
</code>
</pre>
Answer: 'undefined'

<pre>
<code class='javascript'>(function f(f){
    return typeof f();
  })(function(){ return 1; });
</code>
</pre>
Answer: 'number'

<pre>
<code class='javascript'>var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  (function(){
    return typeof arguments[0]();
  })(foo.bar);
</code>
</pre>

<pre>
<code class='javascript'>var foo = {
    bar: function(){ return this.baz; },
    baz: 1
  }
  typeof (f = foo.bar)();
</code>
</pre>

<pre>
<code class='javascript'>var f = (function f(){ return "1"; }, function g(){ return 2; })();
  typeof f;
</code>
</pre>

<pre>
<code class='javascript'>var x = 1;
  if (function f(){}) {
    x += typeof f;
  }
  x;
</code>
</pre>

<pre>
<code class='javascript'>var x = [typeof x, typeof y][1];
  typeof typeof x;
</code>
</pre>

<pre>
<code class='javascript'>(function(foo){
    return typeof foo.bar;
  })({ foo: { bar: 1 } });
</code>
</pre>

<pre>
<code class='javascript'>(function f(){
    function f(){ return 1; }
    return f();
    function f(){ return 2; }
  })();
</code>
</pre>

<pre>
<code class='javascript'>function f(){ return f; }
  new f() instanceof f;
</code>
</pre>

<pre>
<code class='javascript'>with (function(x, undefined){}) length;
</code>
</pre>
