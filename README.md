# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


----菜单
    首页
    查找
    上传
    我的
      ----编辑我的菜谱


    菜单：在谁那谁变红
----home----
    ✅ input(根据菜名搜索，即时搜索提醒)   置顶
        框（搜索时候的框，显示搜索建议 最多5个）
        需求：input 中分别有 focus 和 blur 方法，当 input 聚焦时，我们的下拉选项显示出来；当 input 失去焦点时，我们的下拉选项隐藏。
                如果 用户向 input 框中输入文字后，下拉选项中的文字显示与之匹配的信息。 
    ✅ 默认显示20个菜名    
    ✅    --点击菜名功能-- 显示/隐藏 详情
----upload----
      +
      --点击+-- (x      下一步)  菜谱名称
      --点击x-- (+)
      --提交成功后，清空表单数据---