<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  data() {
    return {};
  },
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'AeJrrFpeevG1UiXFy0RufFhV-gzGzoHsz',// your appId
      appKey: 'RFxdGsbQTJynqfAbQLh5Nzop', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      path: window.location.pathname,
      placeholder: '留下你想说的话吧~',
      meta: ['昵称','邮箱','网址'],
    });

    var infoEle = document.querySelector('#vcomments .info');
    if (infoEle && infoEle.childNodes && infoEle.childNodes.length > 0){
        infoEle.childNodes.forEach(function(item) {
            item.parentNode.removeChild(item);
        });
    }

  },
}
</script>

<style>
    #vcomments .vheader .vnick {
        width: 31%;
        border: 1px solid #dedede;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }

    #vcomments .vheader .vmail {
        width: 31%;
        border: 1px solid #dedede;
        margin-left: 24px;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }

    #vcomments .vheader .vlink {
        width: 31%;
        border: 1px solid #dedede;
        margin-left: 24px;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }
    .vpower.txt-right {
        display: none;
    }
</style>