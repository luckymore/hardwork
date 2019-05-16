# [每天一个linux命令](https://lbb4511.gitbooks.io/linux-command)

## 端口占用
> lsof -i tcp:8080


## which


## vim 快捷键



## cpu 与 内存使用
```bash
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l 	2
cat /proc/cpuinfo| grep "cpu cores"| uniq                        	8
cat /proc/cpuinfo| grep "processor"| wc -l                    	32
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c	32  Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz
top -u user  mem内存	13191496+total, 12949128+used
```

- top -u user
  
PID：进程的ID
　　USER：进程所有者
　　PR：进程的优先级别，越小越优先被执行
　　NInice：值
　　VIRT：进程占用的虚拟内存
　　RES：进程占用的物理内存
　　SHR：进程使用的共享内存
　　S：进程的状态。S表示休眠，R表示正在运行，Z表示僵死状态，N表示该进程优先值为负数
　　%CPU：进程占用CPU的使用率
　　%MEM：进程使用的物理内存和总内存的百分比
　　TIME+：该进程启动后占用的总的CPU时间，即占用CPU使用时间的累加值。
　　COMMAND：进程启动命令名称
```

- pmap
可以根据进程查看进程相关信息占用的内存情况，(进程号可以通过ps查看)如下所示：
> pmap -d 5647

- free 


