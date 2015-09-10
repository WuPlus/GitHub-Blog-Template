---
layout: post
title: Github Tutorial（Mac）- Upload local project to github
description: upload local project to Github Repository
category: Blog
---

## 1. Create a new github repository in Github

## 2. Open terminal, use cd command to your target project folder
<pre>
	<code class='bash'>
git init
git commit -m "first commit"
# Use the address your repository created above
git remote add origin https://github.com/Test/Test.git
git push -u origin master
</code>
</pre>

<!-- more -->

## 3. Open your Github application. Click the (+) on the left corner, add the project. 

![Image of Project](\img\blog\githubAddRepository.png)
