---
title: "git"
description: "git command and commit standard"
pubDate: 2023-06-20
tags: ["git"]
cover: "git.png"
---

## 拉取

git clone address

git pull 远程仓库地址/origin 远程分支名称:本地分支

## 提交

git push 远程仓库地址/origin 本地分支:远程分支

## 初始化

git init

## 添加远程仓库地址

git remote add origin 远程仓库地址

## 分支

### 查看

git branch

### 切换

git checkoutt 分支名称

## 一般流程

git pull

git add .

git commit -m "修改信息"

git push

## commit

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
