---
title: "linux"
description: "Some linux error"
pubDate: 2022-06-08
tags: ["linux"]
cover: "linux-terminal-ubuntu-sudo.jpg"
---

## yum

### Apprepo 错误

CentOS Linux 8 had reached the End Of Life (EOL) on December 31st, 2021. It means that CentOS 8 will no longer receive development resources from the official CentOS project. After Dec 31st, 2021, if you need to update your CentOS, you need to change the mirrors to vault.centos.org where they will be archived permanently.

Step 1: Go to the /etc/yum.repos.d/ directory.

```shell
cd /etc/yum.repos.d/
```

Step 2: Run the below commands

```shell
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
```

Step 3: To clean all cached information, use the following command

```shell
yum clean all
```

Step 4: Now run the yum update

```shell
yum update -y
```

## python 安装

```shell
//安装依赖
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel gcc make


wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tgz
tar -xvf Python-3.10.0.tgz
cd Python-3.10.0

./configure --prefix=/root/tools/Python-3.10.0
or ./configure --enable-optimizations

make && make install

pip3 install --upgrade pip
```
