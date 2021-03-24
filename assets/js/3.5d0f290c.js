(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{351:function(t,e,a){t.exports=a.p+"assets/img/1.7713ce41.jpeg"},352:function(t,e,a){t.exports=a.p+"assets/img/2.14565ae3.jpeg"},353:function(t,e,a){t.exports=a.p+"assets/img/3.bb87ff87.jpeg"},354:function(t,e,a){t.exports=a.p+"assets/img/4.16cf6a43.jpeg"},355:function(t,e,a){t.exports=a.p+"assets/img/5.8296cc83.jpeg"},356:function(t,e,a){t.exports=a.p+"assets/img/6.c2a5bb2e.jpeg"},357:function(t,e,a){t.exports=a.p+"assets/img/7.8296cc83.jpeg"},358:function(t,e,a){t.exports=a.p+"assets/img/8.c2a5bb2e.jpeg"},384:function(t,e,a){"use strict";a.r(e);var s=a(41),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-合并分支应用的三种情景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-合并分支应用的三种情景"}},[t._v("#")]),t._v(" Git：合并分支应用的三种情景")]),t._v(" "),s("h3",{attrs:{id:"一、git-merge-命令应用的三种情景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git-merge-命令应用的三种情景"}},[t._v("#")]),t._v(" 一、git merge 命令应用的三种情景")]),t._v(" "),s("h4",{attrs:{id:"_1-1-快进-无冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-快进-无冲突"}},[t._v("#")]),t._v(" 1.1 “快进”(无冲突)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("master分支")]),t._v("\n假设现在只有一个默认的 master 分支，并提交了3次，B0、B1和B2都是提交对象")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(351),alt:""}})]),t._v(" "),s("p",[t._v("首先要清楚，每次产生的提交对象会包含一个指向上次提交对象（父对象）的指针，所以图中B0、B1和B2之间的箭头是指针指向父对象的意思，真正的提交顺序还是B0到B1再到B2。同时 master 指针指向最新的提交B2。")]),t._v(" "),s("p",[t._v("另外Git中还有一个名为 HEAD 的特殊指针，它是一个指针，指向当前所在的本地分支（可以将 HEAD想象为当前分支的别名）。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("dev新分支")]),t._v("\n现在新建一个分支并切换到新分支")])]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git branch\nSwitched to a new branch 'dev'\n")])])]),s("p",[t._v("它是下面两条命令的简写：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch dev\ngit branch dev'\n")])])]),s("p",[s("img",{attrs:{src:a(352),alt:""}})]),t._v(" "),s("p",[t._v("因为是在B2创建 dev，所以新分支 dev 指向B2。另外从分支 master 切换到分支 dev，所以HEAD指向当前分支 dev。")]),t._v(" "),s("p",[t._v("在 dev 分支工作并提交了2次：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(353),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("合并dev和master")])])]),t._v(" "),s("p",[t._v("在分支 dev 的工作结束，切换到分支 master ，然后把 dev 合并到 master 上：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git checkout master\nSwitched to branch 'master'\nD:\\> git merge dev\nMerge made by the 'recursive' strategy.\n test-2.txt | 3 ++-\n 1 file changed, 2 insertions(+), 1 deletion(-)\n")])])]),s("p",[t._v("由于当前 master 分支所指向的提交是你当前提交（dev的提交）的直接上游，所以 Git 只是简单的将 master 指针向前移动。 换句话说，当你试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）”。合并结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(354),alt:""}})]),t._v(" "),s("p",[t._v("最后，你可以删除 dev 分支，因为你已经不再需要它了 —— master 分支已经指向了同一个位置。 你可以使用带 -d 选项的 git branch 命令来删除分支：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git branch -d dev\n")])])]),s("h4",{attrs:{id:"_1-2-非-快进-修改不同文件。-无冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-非-快进-修改不同文件。-无冲突"}},[t._v("#")]),t._v(" 1.2 非“快进”，修改不同文件。(无冲突)")]),t._v(" "),s("p",[t._v("当在新分支 dev 进行了一次提交B3，再回到分支 master 又进行一次提交 B4。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(355),alt:""}})]),t._v(" "),s("p",[t._v("这里用 git merge 合并分为两种情况，现在讲第一种情况：")]),t._v(" "),s("p",[t._v("在 master 分支和 dev 分支的公共祖先 B2 后，master 和 dev 的提交是对不同文件或者同一文件的不同部分进行了修改，Git 可以合并它们。（比如说原来有 test-1 和 test-2 两个文件，B4修改的是 test-1 文件，而B3修改的是 test-2 文件，然后合并两个分支。）")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git checkout master\nSwitched to branch 'master'\nD:\\> git merge dev\nMerge made by the 'recursive' strategy.\n test-2.txt | 3 ++-\n 1 file changed, 2 insertions(+), 1 deletion(-)\n")])])]),s("p",[t._v("合并是成功的。")]),t._v(" "),s("p",[t._v("出现这种情况的时候，Git 会使用两个分支的末端所指的快照（B3 和 B4）以及这两个分支的公共祖先（B2），做一个简单的三方合并。注意这里合并后 master 自动 commit 提交了一次，产生了提交B5。而B5中的结果是三方合并的结果。合并结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(356),alt:""}})]),t._v(" "),s("p",[t._v("最后，合并完成，你已经不再需要dev分支了。 现在你可以删除这个分支。")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git branch -d dev\n")])])]),s("h4",{attrs:{id:"_1-3-非-快进-修改相同文件。-有冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-非-快进-修改相同文件。-有冲突"}},[t._v("#")]),t._v(" 1.3 非“快进”，修改相同文件。(有冲突)")]),t._v(" "),s("p",[t._v("当在新分支 dev 进行了一次提交B3，再回到分支 master 又进行一次提交 B4。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(357),alt:""}})]),t._v(" "),s("p",[t._v("上面讲的是第一种情况，现在讲第二种情况：")]),t._v(" "),s("p",[t._v("在 master 分支和 dev 分支的公共祖先 B2 后，master 和 dev 的提交是对同一个文件的同一个部分进行了不同的修改，Git 就没法干净的合并它们。（比如说原来有 test-1 和 test-2 两个文件，B4修改的是 test-1 文件，而B3修改的也是 test-1 文件的同一部分，然后合并两个分支。）")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git checkout master\nSwitched to branch 'master'\nD:\\> git merge dev\nAuto-merging test-1.txt\nCONFLICT (content): Merge conflict in test-1.txt\nAutomatic merge failed; fix conflicts and then commit the result.\n")])])]),s("p",[t._v("合并是失败的。")]),t._v(" "),s("p",[t._v("此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('D:\\> git status\nOn branch master\nYou have unmerged paths.\n  (fix conflicts and run "git commit")\n  (use "git merge --abort" to abort the merge)\n\nUnmerged paths:\n  (use "git add <file>..." to mark resolution)\n\n        both modified:   test-1.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])])]),s("p",[t._v("任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This is test-1.\nupdate test-1.\nadd test-1.\ntest master.\n")])])]),s("p",[t._v("这里 HEAD 表示所指示的版本（也就是你的 master 分支所在的位置，因为你在运行 merge 命令的时候已经检出到了这个分支）在这个区段的上半部分（======= 的上半部分），而 dev 分支所指示的版本在 ======= 的下半部分。 为了解决冲突，你必须选择使用由 ======= 分割的两部分中的一个，或者你也可以自行合并这些内容。 例如，你可以通过把这段内容换成下面的样子来解决冲突：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This is test-1.\nupdate test-1.\nadd test-1.\ntest master.\ntest dev.\n")])])]),s("p",[t._v("然后手动提交：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('D:\\> git add .\nD:\\> git commit -m "connection"\n[master f7daa6b] connection\n')])])]),s("p",[t._v("然后冲突就解决了。合并结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(358),alt:""}})]),t._v(" "),s("p",[t._v("最后，合并完成，你已经不再需要dev分支了。 现在你可以删除这个分支。")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D:\\> git branch -d dev\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);