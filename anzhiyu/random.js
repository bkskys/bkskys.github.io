var posts=["2025/06/27/hello-world/","2025/06/26/这是一篇新的博文/","2025/06/28/第一篇笔记（测试）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };