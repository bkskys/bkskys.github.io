var posts=["2025/06/30/hello-world/","2025/06/30/qexo测试/","2025/06/30/第一篇笔记（测试）/","2025/06/30/Markdown标题语法/","2025/06/26/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };