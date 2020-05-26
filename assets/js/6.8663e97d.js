(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(e,l,a){"use strict";a.r(l);var r=a(43),t=Object(r.a)({},(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("CentOS7默认的内核版本是3.10，低版本内核无法使用高版本才适用的软件包，如bcc等。本文将介绍内核升级的两种方法并做出比较。\n")]),e._v(" "),a("h3",{attrs:{id:"方法比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法比较"}},[e._v("#")]),e._v(" 方法比较")]),e._v(" "),a("p",[e._v("内核升级可以选用基于内核软件包的编译方式也可以选择用yum进行升级，前者运行时间长，并且需要消耗大量的磁盘空间，这一点对于个人学习下使用的云服务器来说很不友好，如果你剩余磁盘已经不够20G，很可能会导致编译终止。第二种方式使用yum安装，安装速度十分快捷，15分钟内就可以得到一个全新内核的linux服务器，所以个人使用更推荐后者。当然在磁盘不紧张的情况下，也可以选用前者练练手，但找kernel-devel包又会让人很头疼。")]),e._v(" "),a("h3",{attrs:{id:"编译方式升级内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译方式升级内核"}},[e._v("#")]),e._v(" 编译方式升级内核")]),e._v(" "),a("p",[e._v("首先去"),a("a",{attrs:{href:"https://www.kernel.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux内核官方网站"),a("OutboundLink")],1),e._v("下载你想升级的内核版本，这里有三个主要的版本，mainline即为现在开发的主线版本，stable为稳定版本，longterm为长期支持版本。其中longterm是最为稳妥的选择。这里以4.14.170版本为列，并且假定为root用户，如果当前用户不是root用户可以"),a("code",[e._v("su -")]),e._v("切换到root用户或者在关键命令前加上"),a("code",[e._v("sudo")]),e._v("\n安装开发软件包")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('yum groupinstall -y "Development tools"\n')])])]),a("p",[e._v("下载安装包至服务器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir /kernelupdate && \nwget -O /kernelupgrade/linux4.14.170.tar.xz  https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.14.170.tar.xz \n")])])]),a("p",[e._v("下载完成后解压")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /kernelupdate && tar -xvf linux4.14.170.tar.xz \n")])])]),a("p",[e._v("解压完成后进入目录通过make menuconfig来进行内核配置\n"),a("img",{attrs:{src:"https://www.dmesg.top:456/hexo-pic/kernel-update/makemenu.png",alt:"avatar"}}),e._v("\n配置完成选择save然后退出即可，此时会在目录下生成.config文件。或者拷贝当前内核的默认配置到解压目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cp /boot/config-$(uname -r) .config\n")])])]),a("p",[e._v("当然没了加快整个的编译过程。可以选择多核心同时编译，使用lscpu或者"),a("code",[e._v('cat /proc/cpuinfo|grep "cpu cores"|wc -l')]),e._v("来查看cpu核数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make -jn #n换成上一步查询到的cpu核数\n")])])]),a("p",[e._v("接下来就是漫长的编译过程，便已完成后需要进一步编译及安装内核模块")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make modules_install\n")])])]),a("p",[e._v("最后就是把编译好的内核安装到系统中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make install\n")])])]),a("p",[e._v("此步骤完成后请编辑"),a("code",[e._v("/boot/grub2/grub.cfg")]),e._v("将多余的内核选项删除，确保不会启动到旧内核")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("reboot\n")])])]),a("p",[e._v("最后重启进入新系统就行")]),e._v(" "),a("h3",{attrs:{id:"yum方式升级内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum方式升级内核"}},[e._v("#")]),e._v(" YUM方式升级内核")]),e._v(" "),a("p",[e._v("导入elrepo的证书文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n")])])]),a("p",[e._v("导入elrepo文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm\n")])])]),a("p",[e._v("查询可用的内核升级包")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('yum --disablerepo="*" --enablerepo="elrepo-kernel" list avaliable\n')])])]),a("p",[e._v("结果如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Ξ (bochs) ~ → yum --disablerepo="*" --enablerepo="elrepo-kernel" list available\nLoaded plugins: fastestmirror, langpacks\nRepository epel is listed more than once in the configuration\nLoading mirror speeds from cached hostfile\n * elrepo-kernel: mirrors.tuna.tsinghua.edu.cn\nAvailable Packages\nkernel-lt-doc.noarch                       4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-lt-headers.x86_64                   4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-lt-devel.x86_64                     4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools.x86_64                     4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools-libs.x86_64                4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools-libs-devel.x86_64          4.4.213-1.el7.elrepo         elrepo-kernel\nkernel-ml.x86_64                           5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-devel.x86_64                     5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-doc.noarch                       5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-headers.x86_64                   5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-tools.x86_64                     5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-tools-libs.x86_64                5.5.2-1.el7.elrepo           elrepo-kernel\nkernel-ml-tools-libs-devel.x86_64          5.5.2-1.el7.elrepo           elrepo-kernel\n')])])]),a("p",[e._v("这里的lt即为刚才提到的longterm版,ml为mainline版。这里我还是安装lt版本，顺便安装kernel-devel，美滋滋！")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('yum --disablerepo="*" --enablerepo="elrepo-kernel" install kernel-lt-*\n')])])]),a("p",[e._v("安装完成后生成grub配置文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("grub2-mkconfig -o /boot/grub2/grub.cfg\n")])])]),a("p",[e._v("最后编辑"),a("code",[e._v("/boot/grub2/grub.cfg")]),e._v("项，将其中的多余内核加载项删除并重启即可\n最后是升级好的结果")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Ξ (bochs) ~ → cat /etc/redhat-release \nCentOS Linux release 7.7.1908 (Core)\nΞ (bochs) ~ → uname -r\n4.4.213-1.el7.elrepo.x86_64\n")])])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("对比上述两种内核升级方法，使用yum安装要简单许多，但yum安装许多内核的模块无法手动配置，这就导致很多的模块可能是用不了的，反正看情况选择合适的方法。最后，内核升级仅推荐在自己的服务器上升级，"),a("strong",[e._v("谨慎")]),e._v("在生产服务器上操作！")])])}),[],!1,null,null,null);l.default=t.exports}}]);