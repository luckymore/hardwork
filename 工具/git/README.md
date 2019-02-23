## 超实用的git实践！！！

### 合并多个commit
合并最新三条记录
```shell
git rebase -i HEAD~3
``` 
vim编辑合并项
- `s`, `squash` = 压缩到上一个commit
- `f`, `fixup` = 压缩到上一个commit并忽略它的log message

```shell
pick e7ba81d Commit-1
squash 5756e15 Commit-2
squash b1b8189 Commit-3
```

###




## 参考
- [Git 菜单](https://github.com/geeeeeeeeek/git-recipes/blob/master/README.md)
- [git-flow](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)
