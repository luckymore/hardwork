# rebase VS. merge
在 Git 中整合来自不同分支的修改主要有两种方法：merge 以及 rebase。
官方把它俩比作一本书的草稿和修订版：
- marge：会根据两个分支的最新快照以及二者最近的共同祖先，生成一个新的快照并提交

就像这样一个分支
![一个分叉的提交历史](https://wac-cdn.atlassian.com/dam/jcr:01b0b04e-64f3-4659-af21-c4d86bc7cb0b/01.svg?cdnVersion=le)

## merge
```shell
git checkout feature
git merge master

# or one-liner
git merge feature master
```
![](https://wac-cdn.atlassian.com/dam/jcr:e229fef6-2c2f-4a4f-b270-e1e1baa94055/02.svg?cdnVersion=le)

## rebase
原理：是首先找到这两个分支（即当前分支 feature、变基操作的目标基底分支 master）的最近共同祖先，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底

黄金法则：把它当做是在推送前`清理提交`使之整洁的工具，**不要在公共分支上使用**

- 把所有提交移到了目标分支后面
```shell
git checkout feature
git rebase master
```

![](https://wac-cdn.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg?cdnVersion=le)

- 交互式的rebase，一般来说，这被用于将 feature 分支并入 master 分支之前，清理混乱的历史。

```shell
# -i interactive
git checkout feature
git rebase -i master
```

# 参考
- [在公共分支上rebase带来的灾难以及解决办法](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)
- [5.1 代码合并：Merge、Rebase 的选择
](https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase-%E7%9A%84%E9%80%89%E6%8B%A9)
