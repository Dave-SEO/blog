(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{619:function(n,s,a){"use strict";a.r(s);var t=a(3),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("Boxx"),n._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul")]),a("p"),n._v(" "),a("ol",[a("li",[n._v("安装nginx\nbrew tap denji/homebrew-nginx\nbrew install nginx-full --with-rtmp-module")]),n._v(" "),a("li",[n._v("安装ffmpeg\nbrew install ffmpeg")]),n._v(" "),a("li",[n._v("找到nginx 安装目录修改配置\n配置Nginx,支持http协议拉流")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    location /hls {\n        #Serve HLS config\n        types {\n            application/vnd.apple.mpegurl    m3u8;\n            video/mp2t ts;\n        }\n        root /usr/local/var/www;\n        add_header Cache-Control    no-cache;\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("配置Nginx，支持rtmp协议推流\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    rtmp {\n    server {\n        listen 1935;\n        application rtmplive {\n            live on;\n            max_connections 1024;\n        }\n        application hls{\n            live on;\n            hls on;\n            hls_path /usr/local/var/www/hls;\n            hls_fragment 1s;\n        }\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[n._v("找测试源\ncd test.mp4")]),n._v(" "),a("li",[n._v("启动nginx\nnginx")]),n._v(" "),a("li",[n._v("推流至RTMP到服务器\nffmpeg -re -i test-2.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/rtmplive/rtmp\n测试：\n下载vlc file=》open network 输入rtmp://localhost:1935/rtmplive/rtmp")]),n._v(" "),a("li",[n._v("推流至HLS到服务器\nffmpeg -re -i test-2.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/hls/strem\n测试：\n打开safari浏览器输入 localhost:1935/hls/strem.m3u8")]),n._v(" "),a("li",[n._v("提示\n所有操作均在mac下")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);