<template>
<div>
    <span :id="vuepress_path" class="leancloud_visitors">
        <!-- <span class="stat update-time">
            <img class="icon" src="/update-time.png" />{{$page.lastUpdated}}
        </span> -->
        <span class="stat read-count">
            <img class="icon" :src="$withBase('/read-count.png')" />
            <span class="leancloud-visitors-count"></span>
        </span>
    </span>
    <div id="vcomments"></div>
</div>
</template>

<script>
export default {
  name: 'Valine',
  data() {
    return {
        vuepress_path: "/vuepress-teach"+this.$route.path,
    };
  },
  mounted: function(){
    // require window 
    // console.log(this.$route.path);
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'AeJrrFpeevG1UiXFy0RufFhV-gzGzoHsz',// your appId
      appKey: 'RFxdGsbQTJynqfAbQLh5Nzop', // your appKey
      avatar:'mm', 
      path: window.location.pathname,
      placeholder: '留下你想说的话吧~',
      visitor: true,
    });

    var infoEle = document.querySelector('#vcomments .info');
    if (infoEle && infoEle.childNodes && infoEle.childNodes.length > 0){
        infoEle.childNodes.forEach(function(item) {
            item.parentNode.removeChild(item);
        });
    }//去掉角标

  },
}
</script>

<style>
    #vcomments .vheader .vnick {
        width: 29%;
        border: 1px solid #dedede;
        margin-left: 2%;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }

    #vcomments .vheader .vmail {
        width: 29%;
        border: 1px solid #dedede;
        margin-left: 4%;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }

    #vcomments .vheader .vlink {
        width: 29%;
        border: 1px solid #dedede;
        margin-left: 4%;
        padding-left: 12px;
        padding-right: 8px;
        border-radius: 8px
    }

    .vpower.txt-right {
        display: none;
    }
    .vsys{
        display:none !important;
    }

    img.vimg {
        transition: all 1s   /* 旋转时间为 1s */
    }
    img.vimg:hover {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    #vcomments .vcards .vcard {
        padding: 15px 20px 0 20px;
        border-radius: 10px;
        margin-bottom: 15px;
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, .12);
        transition: all .3s
    }
    #vcomments .vcards .vcard:hover {
        box-shadow: 0 0 8px 3px rgba(0, 0, 0, .12)
    }
    #vcomments .vcards .vcard .vh .vcard {
        border: none;
        box-shadow: none;
    }

    .icon {
        width: 18px;
        margin-right: 4px;
        vertical-align: middle;
        opacity: 1;
    }
    .leancloud-visitors-count {
        vertical-align: middle;
    }
    .stat {
        font-size: 14px;
        opacity: .6;
    }

</style>
