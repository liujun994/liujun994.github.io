/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/07/typora-vue-theme-zhu-ti-jie-shao/index.html","5506ade9be1fa9fed53c4722c0a9a958"],["/2022/06/24/hello-world/index.html","c130ea7d3737f5dd5d950a1543c89afe"],["/2022/06/25/hello-world-fu-ben/index.html","20363c3e49f88eed1b41a67b351864d2"],["/2022/06/25/lizi2-2/index.html","44c31415508494439f2e32aa8e7219c6"],["/2022/06/25/test-figure/index.html","f876792f00664823d1383139eb3d8333"],["/2022/06/26/book/index.html","8495a7ad844f78794167b5b8e5aed16d"],["/2022/06/26/paper/index.html","48e2ef5832dea4b1d6a498ca741293f5"],["/2022/06/26/postname/index.html","95b3ad60edc1924b21b8fae64c9e1866"],["/2022/06/26/test/1656170529448.png","c613fbd6f7fadb8e65fdae620d89d277"],["/2022/06/26/test/1656170968719.png","891ea5f9186f889adef7b215d9be9948"],["/2022/06/26/test/1656170975609.png","c613fbd6f7fadb8e65fdae620d89d277"],["/2022/06/26/test/1656171152326.png","c613fbd6f7fadb8e65fdae620d89d277"],["/2022/06/26/test/index.html","ac4926da7c8e9fe9f362dec7d0deccfa"],["/2022/06/27/markdown-establish-table/index.html","8c071ed277832d2f9b93040a6737f2f0"],["/2022/06/27/python-multithreading/index.html","665a097b34c571ce57aaa8b620833b16"],["/2022/06/27/shi-ci-chuang-zuo/index.html","78c3da95b411292d0fce402b4a8435a7"],["/2022/06/27/xing-qu-yu-ji-neng/index.html","8a5cd2386e4816ea16d29e63dae88408"],["/404/index.html","c613d8937f74995e664f7b8e1e9d915e"],["/Research/index.html","e49916c1d0e881f34b49d7a52b803127"],["/Resume/Python-Multithreading.html","787098a46b0d689ae6315cdba10996f9"],["/Resume/index.html","e5b0322dfd93f7d1e4fb887209d78c2f"],["/about/index.html","383829f0db572c2d2848d0d854249b93"],["/archives/2018/09/index.html","4cb8be6e388dfb9d713511fcfca4d5cc"],["/archives/2018/index.html","f106a3428afede421ad8610a8204dd1d"],["/archives/2022/06/index.html","9c41da00ad9ef01ba3ff2560f27dcdbb"],["/archives/2022/index.html","060dde3c960de997bbabf1767bbefef9"],["/archives/index.html","1f7d3ae5599f2a8f22065722d1beb839"],["/archives/page/2/index.html","062713bf7e6e0284750f26d2bd053e62"],["/asset/galleries/index.html","408d27391425241252816034ce185b6f"],["/asset/电脑1.jpg","1cb380560575e7e4a77fc6746206beee"],["/asset/电脑2.jpg","9a8e6960b54a0ad2ba355706ff2224ad"],["/asset/简历/888_页面_1.jpg","8f3c9f6a5411e4caa377250cbab866c3"],["/asset/简历/888_页面_1.png","6b2fa9e21056f8ff96a51bb08770e84d"],["/asset/简历/888_页面_3.jpg","903a933ade65050b4ff50261f7d93c78"],["/asset/简历/888_页面_3.png","ee42524a0d5d5f02ec29691d75f6abb1"],["/asset/简历/888_页面_4.jpg","292477159c6711f12816e4b99cc6002a"],["/asset/简历/888_页面_4.png","01011ccd7d8825bc94890ffbb297862a"],["/asset/诗词1.jpg","1dfac750f127eb506ad5c8f9e5e80a0d"],["/asset/诗词2.jpg","7f334e20931ebe5ce891355fd94094ba"],["/categories/Diary/Games/index.html","11eca0fe27fdf9718047a34e1395bded"],["/categories/Diary/PlayStation/index.html","527adf61e3ec39341787836c695f2898"],["/categories/Diary/index.html","b623bf76250720b86c4c87d24405943f"],["/categories/Life/index.html","7604a515705bd7398161cc5891e90836"],["/categories/index.html","5861dbac3e6725dd5b70bd98479b04ba"],["/categories/兴趣与技能/index.html","633c11381644be9e340ebb535e7385f8"],["/categories/学习/index.html","750610d7405fe8688739ddaf98197fb1"],["/categories/科研/index.html","7ad34176ee25ee9d3d39a0499b8aeef7"],["/categories/诗词创作/index.html","c49720e061c37ea86c95d24c190f8e00"],["/contact/index.html","92c2335c7c831312374f0f0c7856e41e"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","f393b9cd4eb7f3b66b52b0410ece520f"],["/galleries/index.html","1b572566a25b1b98dca3ddc8eafc283c"],["/images/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/images/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/images/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/images/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/images/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/images/13.jpg","677c90f32232dd162b9c504ff176b100"],["/images/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/images/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/images/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/images/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/images/18.jpg","d8104647c594f21438cbc17331c57025"],["/images/19.jpg","86258814e4374b85adac9bd8235ad110"],["/images/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/images/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/images/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/images/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/images/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/images/24.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/images/25.jpg","306003d8042084347393c395cf75c56d"],["/images/26.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/images/27.jpg","4cce4149d398bae2604996c73b6ca8cf"],["/images/28.jpg","268d17eb58cd014f6763a21bf0dd95cd"],["/images/29.jpg","5cafd4bf02f4f755df8a890a411cdcb3"],["/images/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/images/30.jpg","8f21741323b67ca21fcbd740ad921898"],["/images/31.jpg","7eb8adb53ad6f13ab75856fd33d046ea"],["/images/32.jpg","e7699760a5c8f2213077ced4526e9734"],["/images/33.jpg","08d1f3ca19ce285bb3ea6fde68e50bef"],["/images/34.jpg","a7e59e3f9f8416613b720d64812c3797"],["/images/35.jpg","8abfe5f50f26b9e1454f566f70048b8b"],["/images/36.jpg","d4702786d6babe71f73f40d23443744b"],["/images/37.jpg","ee60d58f83933dfc1ac8e756bb009239"],["/images/38.jpg","0eaa28b155e5cb36465c8956e484ea1d"],["/images/39.jpg","f187773712edf0b8d08a5c503a5c4511"],["/images/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/images/40.jpg","1861c741ca70b5dd915d0ab77f1f1060"],["/images/41.jpg","210e101723fb4d3d2b265401c399b5f8"],["/images/42.jpg","341701e964c33cea308cfc020daa8e28"],["/images/43.jpg","65acd3dc07b0f79fb8f145afff7278a3"],["/images/44.jpg","442fc8bbafa23ae28f4ca9507a04dcde"],["/images/45.jpg","f9e38810a14afae00c1ae463caf38066"],["/images/46.jpg","b5a0aa594a0618cfd6ab734ccbc65d12"],["/images/47.jpg","9c2ae5a83d579f919971bd258d1ff46c"],["/images/48.jpg","8aac59005423b76214e25ed1dcefa527"],["/images/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/images/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/images/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/images/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/images/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/index.html","96de8a5a9169d5be1367e81476c2b5e0"],["/interests_and_skills/index.html","bbaddc5d6582b114450a41619bb93d85"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","c2d4306a24948ffd6f7f853449c2e44b"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","fe11a3a32db7284d920063f21e7d3777"],["/libs/awesome/css/all.min.css","dfb8fc36e102730fddf78b5494eb0035"],["/libs/awesome/webfonts/fa-brands-400.ttf","0fbfc862056bad982c93ba51460e31d9"],["/libs/awesome/webfonts/fa-regular-400.ttf","35307505c129ab1f9173f7917b50756f"],["/libs/awesome/webfonts/fa-solid-900.ttf","ffc89d3ea2e2c3ba295689305f91ca78"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","4bde6a62454b669bb0ce0448491a71d7"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","2ec2cb2199d4d881e6a6ad86690f6add"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/masterpiece/index.html","f07fa462b16ab8c1f6cd336cb9832370"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","306003d8042084347393c395cf75c56d"],["/medias/banner/1.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/6.jpg","a939c8c257fad2cf32ff4db949f6d578"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/24.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/featureimages/25.jpg","306003d8042084347393c395cf75c56d"],["/medias/featureimages/26.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/featureimages/27.jpg","4cce4149d398bae2604996c73b6ca8cf"],["/medias/featureimages/28.jpg","268d17eb58cd014f6763a21bf0dd95cd"],["/medias/featureimages/29.jpg","5cafd4bf02f4f755df8a890a411cdcb3"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/30.jpg","8f21741323b67ca21fcbd740ad921898"],["/medias/featureimages/31.jpg","7eb8adb53ad6f13ab75856fd33d046ea"],["/medias/featureimages/32.jpg","e7699760a5c8f2213077ced4526e9734"],["/medias/featureimages/33.jpg","08d1f3ca19ce285bb3ea6fde68e50bef"],["/medias/featureimages/34.jpg","a7e59e3f9f8416613b720d64812c3797"],["/medias/featureimages/35.jpg","8abfe5f50f26b9e1454f566f70048b8b"],["/medias/featureimages/36.jpg","d4702786d6babe71f73f40d23443744b"],["/medias/featureimages/37.jpg","ee60d58f83933dfc1ac8e756bb009239"],["/medias/featureimages/38.jpg","0eaa28b155e5cb36465c8956e484ea1d"],["/medias/featureimages/39.jpg","f187773712edf0b8d08a5c503a5c4511"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/40.jpg","1861c741ca70b5dd915d0ab77f1f1060"],["/medias/featureimages/41.jpg","210e101723fb4d3d2b265401c399b5f8"],["/medias/featureimages/42.jpg","341701e964c33cea308cfc020daa8e28"],["/medias/featureimages/43.jpg","65acd3dc07b0f79fb8f145afff7278a3"],["/medias/featureimages/44.jpg","442fc8bbafa23ae28f4ca9507a04dcde"],["/medias/featureimages/45.jpg","f9e38810a14afae00c1ae463caf38066"],["/medias/featureimages/46.jpg","b5a0aa594a0618cfd6ab734ccbc65d12"],["/medias/featureimages/47.jpg","9c2ae5a83d579f919971bd258d1ff46c"],["/medias/featureimages/48.jpg","8aac59005423b76214e25ed1dcefa527"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","d701aed14a721d518b2e6c0161ae75e4"],["/medias/reward/wechat.png","1a43b0ff83befd980b81e4a778797ae4"],["/message/index.html","9bf3eacef6934dc99b70f9da8425a51e"],["/page/2/index.html","404881753da45f19dd32dcc3114a159a"],["/sw-register.js","0aa86b3713f83fbf8fd133cc7c082830"],["/tags/Markdown/index.html","f5884eee4dfd10d13ad91a864fbd2d15"],["/tags/Typora/index.html","d0f27a4ba4f39af3d0fe35845b4a6957"],["/tags/index.html","8effb1da9aaeaca506c64789c94c5bbf"],["/tags/jQuery/index.html","81f81f206f2b66b2576270a5835552eb"],["/tags/python/index.html","58d59dc369a901534d8d0d842ded0e57"],["/tags/电脑维修/index.html","37da6e4b7d48534db66fac759111a4bf"],["/tags/表单验证/index.html","64a75c6fc78d72279576fc8aad640e14"],["/tags/表格/index.html","159fd97d9cd7d75b641ede430078b07b"],["/tags/诗词/index.html","3dc742b50442b631dbb095fcd49f10d7"],["/video/index.html","561eeb13a34b7ca9ce7fd161d9136d9c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
