let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      // console.log(array);
      //遍历数组在li标签中添加数组id的内容
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        // 然后在ul里添加li
        xxx.appendChild(li);
      });
    } else if (request.status === 404) {
        getPage.setAttribute("disabled",true);
    }//需要请求后才能禁用，需要改进。
  };
  request.send();
  n += 1;
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.response);
      const string = request.responseXML;
      const text = string.getElementsByTagName("warning")[0].textContent;
      // 获取标签名为warning里的内容
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //  创建HTML
    const div = document.createElement("div");
    // 填写HTML
    div.innerHTML = request.response;
    // 插入到body
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log(request.response);
    // 创建script
    const script = document.createElement("script");
    // 填写script
    script.innerHTML = request.response;
    // 插入到body
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement("style");
        // 填写style内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载CSS 失败");
      }
    }
  };
  request.send();
};
