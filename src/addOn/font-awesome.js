﻿frame_data["font-awesome"] = {"xml":"<div title=\"font-awesome\"><div class=\"design_area\"><section class=\"designHead\" data-placebeforeframework=\"yes\">\n    <link href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</section>\n</div><div class=\"components\"><div class=\"category\" title=\"Font Awesome\">\n    <div class=\"component\" title=\"Stacked Icons\" data-thumbnail=\"https://editor.bootedit.com/assets/js/addOn/font-awesome_assets/images/Stacked_Icons.png\">\n        <div class=\"html-content\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-camera fa-stack-1x\"></i><i class=\"fa fa-ban fa-stack-2x\"></i></span></div>\n        <div class=\"runOnLoad\">\n            <script>\n                tagReName(\"Icons\", \".fa-stack\");\n                designSetting(\"isAbsolutePosition\", \".fa-stack .fa\");\n                designSetting(\"notContentEditable\", \".fa-stack\");\n                designSetting(\"notDraggable\", \".fa-stack .fa\");\n                designSetting(\"notDroppable\", \".fa-stack .fa\");\n                designSetting(\"noCopy\", \".fa-stack .fa\");\n                designSetting(\"noRemove\", \".fa-stack .fa\");\n            </script>\n            <style>\n                .fa-stack .fa{\n                    position: absolute !important;\n                }\n                .fa-stack .fa.ag-focus{\n                    background-color: rgba(255, 255, 255, 0.53) !important;\n                }\n\n                .fa-stack .fa.ag-focus.fa-inverse {\n                    background-color: rgba(0, 0, 0, 0.75) !important;\n                }\n            </style>\n        </div>\n        <div class=\"addButtons\">\n            <script>\n                var list = new listOption(\"fa-lg,fa-2x,fa-3x,fa-4x,fa-5x\");\n                list.altCaption = {\"fa-lg\": \"Large\", \"fa-2x\": \"Large x2\", \"fa-3x\": \"Large x3\", \"fa-4x\": \"Large x4\", \"fa-5x\": \"Large x5\"};\n                addListButton(inEditor, \"Size\", list, \".fa-stack\");\n\n            </script>\n        </div>\n        <div class=\"addButtons\">\n            <script>\n                addCustomButton(inEditor, \"bothIcons\", \"Select Both\", \"\", \"\", \".fa-stack .fa\");\n\n                inEditor.find(\"#bothIcons\").click(function (event) {\n                    var elm = selectedElement();\n                    focusElement(elm.parent());\n                    event.stopPropagation();\n                });   \n\n\n                addCustomButton(inEditor, \"switchIcons\", \"Switch Icons\", \"\", \"\", \".fa-stack .fa\");\n\n                inEditor.find(\"#switchIcons\").click(function (event) {\n                    var elm = selectedElement();\n                    if (elm.is(':first-child')) {\n                        $(\"#putAfter\").click();\n                    }else{\n                        $(\"#putBefore\").click();\n                    }\n                    setTimeout(function () {\n                        if (elm.next().length > 0) {\n                            var sib = elm.next();\n                        }else{\n                            var sib = elm.prev();\n                        }\n                        focusElement(sib);\n                    }, 100);\n                    event.stopPropagation();\n                });      \n            </script>\n        </div>\n    </div>\n    <div class=\"component\" title=\"Font Awesome\" data-alias=\"icon\" data-thumbnail=\"https://editor.bootedit.com/assets/js/addOn/font-awesome_assets/images/Font_Awesome.png\">\n        <div class=\"html-content\"><span class=\"fa fa-home\"></span></div>\n        <div class=\"requireCSSLink\" data-check=\".fa\" data-placebeforeframework=\"yes\">\n            <link href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n        </div>\n        <div class=\"runOnLoad\">\n            <script>\n                designSetting(\"icons\",\".fa\");\n                // To get latest list simply open the latest cheatsheet: http://fortawesome.github.io/Font-Awesome/cheatsheet/\n                // Then in your browser, open the developer console and run:\n                // var names=[];$('.row .col-md-4').each(function(){var a=$(this).text(),b=a.match(/fa-.*/);b&&b[0]&&0>a.indexOf('(alias)')&&names.push(b[0].substring(3))}),console.log(names.join(','));\n                getVar[\"faList\"] = \"500px,address-book,address-book-o,address-card,address-card-o,adjust,adn,align-center,align-justify,align-left,align-right,amazon,ambulance,american-sign-language-interpreting,anchor,android,angellist,angle-double-down,angle-double-left,angle-double-right,angle-double-up,angle-down,angle-left,angle-right,angle-up,apple,archive,area-chart,arrow-circle-down,arrow-circle-left,arrow-circle-o-down,arrow-circle-o-left,arrow-circle-o-right,arrow-circle-o-up,arrow-circle-right,arrow-circle-up,arrow-down,arrow-left,arrow-right,arrow-up,arrows,arrows-alt,arrows-h,arrows-v,assistive-listening-systems,asterisk,at,audio-description,backward,balance-scale,ban,bandcamp,bar-chart,barcode,bars,bath,battery-empty,battery-full,battery-half,battery-quarter,battery-three-quarters,bed,beer,behance,behance-square,bell,bell-o,bell-slash,bell-slash-o,bicycle,binoculars,birthday-cake,bitbucket,bitbucket-square,black-tie,blind,bluetooth,bluetooth-b,bold,bolt,bomb,book,bookmark,bookmark-o,braille,briefcase,btc,bug,building,building-o,bullhorn,bullseye,bus,buysellads,calculator,calendar,calendar-check-o,calendar-minus-o,calendar-o,calendar-plus-o,calendar-times-o,camera,camera-retro,car,caret-down,caret-left,caret-right,caret-square-o-down,caret-square-o-left,caret-square-o-right,caret-square-o-up,caret-up,cart-arrow-down,cart-plus,cc,cc-amex,cc-diners-club,cc-discover,cc-jcb,cc-mastercard,cc-paypal,cc-stripe,cc-visa,certificate,chain-broken,check,check-circle,check-circle-o,check-square,check-square-o,chevron-circle-down,chevron-circle-left,chevron-circle-right,chevron-circle-up,chevron-down,chevron-left,chevron-right,chevron-up,child,chrome,circle,circle-o,circle-o-notch,circle-thin,clipboard,clock-o,clone,cloud,cloud-download,cloud-upload,code,code-fork,codepen,codiepie,coffee,cog,cogs,columns,comment,comment-o,commenting,commenting-o,comments,comments-o,compass,compress,connectdevelop,contao,copyright,creative-commons,credit-card,credit-card-alt,crop,crosshairs,css3,cube,cubes,cutlery,dashcube,database,deaf,delicious,desktop,deviantart,diamond,digg,dot-circle-o,download,dribbble,dropbox,drupal,edge,eercast,eject,ellipsis-h,ellipsis-v,empire,envelope,envelope-o,envelope-open,envelope-open-o,envelope-square,envira,eraser,etsy,eur,exchange,exclamation,exclamation-circle,exclamation-triangle,expand,expeditedssl,external-link,external-link-square,eye,eye-slash,eyedropper,facebook,facebook-official,facebook-square,fast-backward,fast-forward,fax,female,fighter-jet,file,file-archive-o,file-audio-o,file-code-o,file-excel-o,file-image-o,file-o,file-pdf-o,file-powerpoint-o,file-text,file-text-o,file-video-o,file-word-o,files-o,film,filter,fire,fire-extinguisher,firefox,first-order,flag,flag-checkered,flag-o,flask,flickr,floppy-o,folder,folder-o,folder-open,folder-open-o,font,font-awesome,fonticons,fort-awesome,forumbee,forward,foursquare,free-code-camp,frown-o,futbol-o,gamepad,gavel,gbp,genderless,get-pocket,gg,gg-circle,gift,git,git-square,github,github-alt,github-square,gitlab,glass,glide,glide-g,globe,google,google-plus,google-plus-official,google-plus-square,google-wallet,graduation-cap,gratipay,grav,h-square,hacker-news,hand-lizard-o,hand-o-down,hand-o-left,hand-o-right,hand-o-up,hand-paper-o,hand-peace-o,hand-pointer-o,hand-rock-o,hand-scissors-o,hand-spock-o,handshake-o,hashtag,hdd-o,header,headphones,heart,heart-o,heartbeat,history,home,hospital-o,hourglass,hourglass-end,hourglass-half,hourglass-o,hourglass-start,houzz,html5,i-cursor,id-badge,id-card,id-card-o,ils,imdb,inbox,indent,industry,info,info-circle,inr,instagram,internet-explorer,ioxhost,italic,joomla,jpy,jsfiddle,key,keyboard-o,krw,language,laptop,lastfm,lastfm-square,leaf,leanpub,lemon-o,level-down,level-up,life-ring,lightbulb-o,line-chart,link,linkedin,linkedin-square,linode,linux,list,list-alt,list-ol,list-ul,location-arrow,lock,long-arrow-down,long-arrow-left,long-arrow-right,long-arrow-up,low-vision,magic,magnet,male,map,map-marker,map-o,map-pin,map-signs,mars,mars-double,mars-stroke,mars-stroke-h,mars-stroke-v,maxcdn,meanpath,medium,medkit,meetup,meh-o,mercury,microchip,microphone,microphone-slash,minus,minus-circle,minus-square,minus-square-o,mixcloud,mobile,modx,money,moon-o,motorcycle,mouse-pointer,music,neuter,newspaper-o,object-group,object-ungroup,odnoklassniki,odnoklassniki-square,opencart,openid,opera,optin-monster,outdent,pagelines,paint-brush,paper-plane,paper-plane-o,paperclip,paragraph,pause,pause-circle,pause-circle-o,paw,paypal,pencil,pencil-square,pencil-square-o,percent,phone,phone-square,picture-o,pie-chart,pied-piper,pied-piper-alt,pied-piper-pp,pinterest,pinterest-p,pinterest-square,plane,play,play-circle,play-circle-o,plug,plus,plus-circle,plus-square,plus-square-o,podcast,power-off,print,product-hunt,puzzle-piece,qq,qrcode,question,question-circle,question-circle-o,quora,quote-left,quote-right,random,ravelry,rebel,recycle,reddit,reddit-alien,reddit-square,refresh,registered,renren,repeat,reply,reply-all,retweet,road,rocket,rss,rss-square,rub,safari,scissors,scribd,search,search-minus,search-plus,sellsy,server,share,share-alt,share-alt-square,share-square,share-square-o,shield,ship,shirtsinbulk,shopping-bag,shopping-basket,shopping-cart,shower,sign-in,sign-language,sign-out,signal,simplybuilt,sitemap,skyatlas,skype,slack,sliders,slideshare,smile-o,snapchat,snapchat-ghost,snapchat-square,snowflake-o,sort,sort-alpha-asc,sort-alpha-desc,sort-amount-asc,sort-amount-desc,sort-asc,sort-desc,sort-numeric-asc,sort-numeric-desc,soundcloud,space-shuttle,spinner,spoon,spotify,square,square-o,stack-exchange,stack-overflow,star,star-half,star-half-o,star-o,steam,steam-square,step-backward,step-forward,stethoscope,sticky-note,sticky-note-o,stop,stop-circle,stop-circle-o,street-view,strikethrough,stumbleupon,stumbleupon-circle,subscript,subway,suitcase,sun-o,superpowers,superscript,table,tablet,tachometer,tag,tags,tasks,taxi,telegram,television,tencent-weibo,terminal,text-height,text-width,th,th-large,th-list,themeisle,thermometer-empty,thermometer-full,thermometer-half,thermometer-quarter,thermometer-three-quarters,thumb-tack,thumbs-down,thumbs-o-down,thumbs-o-up,thumbs-up,ticket,times,times-circle,times-circle-o,tint,toggle-off,toggle-on,trademark,train,transgender,transgender-alt,trash,trash-o,tree,trello,tripadvisor,trophy,truck,try,tty,tumblr,tumblr-square,twitch,twitter,twitter-square,umbrella,underline,undo,universal-access,university,unlock,unlock-alt,upload,usb,usd,user,user-circle,user-circle-o,user-md,user-o,user-plus,user-secret,user-times,users,venus,venus-double,venus-mars,viacoin,viadeo,viadeo-square,video-camera,vimeo,vimeo-square,vine,vk,volume-control-phone,volume-down,volume-off,volume-up,weibo,weixin,whatsapp,wheelchair,wheelchair-alt,wifi,wikipedia-w,window-close,window-close-o,window-maximize,window-minimize,window-restore,windows,wordpress,wpbeginner,wpexplorer,wpforms,wrench,xing,xing-square,y-combinator,yahoo,yelp,yoast,youtube,youtube-play,youtube-square\";\n            </script>\n            <style>\n                .fa-pull-right, .fa-pull-left{\n                    z-index: 2000;\n                }\n            </style>\n        </div>\n        <div class=\"addButtons\">\n            <script>\n\n                addCustomButton(inEditor, \"editFaIcon\", \"Change\", \"\", \"\", \".fa\");\n\n                inEditor.find(\"#editFaIcon\").click(function (event) {\n                    iconBuild(getVar[\"faList\"], \"fa\", true, \"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n                    event.stopPropagation();\n                });\n\n            </script>\n        </div>\n        <div class=\"addButtons\">\n            <script>\n                var list = new listOption(\"fa-lg,fa-2x,fa-3x,fa-4x,fa-5x\");\n                list.altCaption = {\"fa-lg\": \"Large\", \"fa-2x\": \"Large x2\", \"fa-3x\": \"Large x3\", \"fa-4x\": \"Large x4\", \"fa-5x\": \"Large x5\"};\n                addListButton(inEditor, \"Size\", list, \".fa\", \".fa-stack .fa\");\n\n                var list = new listOption(\"fa-pull-right,fa-pull-left\");\n                list.altCaption = {\"fa-pull-right\": \"Right\", \"fa-pull-left\": \"Left\"};\n                addListButton(inEditor, \"Float\", list, \".fa\", \".fa-stack .fa\");\n\n                addClassButton(inEditor, \"Inverse\", \"fa-inverse\", \".fa\");\n                addClassButton(inEditor, \"Border\", \"fa-border\", \".fa\", \".fa-stack .fa\");\n                addClassButton(inEditor, \"Fixed Width\", \"fa-fw\", \".fa\", \".fa-stack .fa\");\n\n                var list = new listOption(\"fa-spin,fa-pulse,fa-rotate-90,fa-rotate-180,fa-rotate-270,fa-flip-horizontal,fa-flip-vertical\");\n                list.altCaption = {\"fa-spin\": \"Spin\", \"fa-pulse\": \"Spin and Pulse\", \"fa-rotate-90\": \"Rotate 90\", \"fa-rotate-180\": \"Rotate 180\", \"fa-rotate-270\": \"Rotate 270\", \"fa-flip-horizontal\": \"Flip Horizontal\", \"fa-flip-vertical\": \"Flip Vertical\"};\n                addListButton(inEditor, \"Spin or Rotate\", list, \".fa\");\n\n            </script>\n        </div>\n        <div class=\"afterDrop\">\n            <script>\n                iconBuild(getVar[\"faList\"], \"fa\", true, \"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n            </script>\n        </div>\n    </div>\n</div>\n</div><div class=\"requiredFiles\">//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css</div></div>"};