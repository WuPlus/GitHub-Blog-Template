---
layout: post
title: Github Tutorial（Mac）
description: Mac环境下上传本地项目至Github Repository
category: Learning
---

1. 在GitHub中新建项目
2. 命令行cd 至目标文件夹
<code>
git init
git commit -m "first commit"
git remote add origin https://github.com/Test/Test.git(这里copy 上面新建的github repository地址)
git push -u origin master
</code>
完成项目上传
如果之后更新项目不想用命令行操作git,想换用github客户端。可以进行如下操作

3. 打开GitHub客户端，右上角添加（+）按钮，添加项目（如图）。
<img src="\img\blog\githubAddRepository.png"> 
