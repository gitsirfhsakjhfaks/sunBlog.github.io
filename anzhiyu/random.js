var posts=["技术与编程/Build/","实验室/Laboratory/","技术与编程/anzhiyu/","uncategorized/hello-world/","生活日常/life/","技术与编程/test/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };