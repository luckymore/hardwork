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

### git reflog + git cherry-pick 对付  git reset ehr33 --hard

### git tag
```bash
# 批量删除本地tag
git tag | grep "v" |xargs git tag -d

# 批量删除远程tag
git show-ref --tag | grep "v1.0"| awk '{print $2}'|xargs git push origin --delete
```

### git rm
```bash
# 删除远程文件夹，但保留本地文件夹
git rm -r –cached dirname

# 删除本地和暂存区
git rm file_path

# 暂存区
git rm –cached file_path
``` 

### git log
```bash
# 查看文件变动记录
git log --full-history  -- myfile

# 搜索关键字
glg --grep='删除 pages/friendsHelp'
```


### git fetch
[我清理了远程已合并的分支，想批量删除本地已被合并的分支](https://stackoverflow.com/a/33548037/8035949)
```bash
git fetch -p && for branch in `git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}'`; do git branch -D $branch; done
```


## 参考
- [Git 菜单](https://github.com/geeeeeeeeek/git-recipes/blob/master/README.md)
- [git-flow](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)
