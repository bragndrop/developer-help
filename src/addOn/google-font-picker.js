﻿frame_data["google-font-picker"] = {"xml":"<div title=\"google-font-picker\"><div class=\"attributeGroup\"><div class=\"addAttributes\">\n    <div id=\"fontSelectBox\">\n        <input id=\"pickFont\" type=\"text\">\n        <style>\n            .ui-dark-theme .font-select > a {\n              background-color: #424242;\n              color: #cccccc;\n              font-size: 15px;\n              border-color: #1b1b1b;\n            }\n            .ui-dark-theme .font-select > a:hover,\n            .ui-dark-theme .font-select > a:hover * {\n              color: #ffffff !important;\n            }\n            .ui-dark-theme .font-select .fs-drop {\n              background: #353436;\n              border: 1px solid #1b1b1b;\n            }\n            .ui-dark-theme #removeFont {\n              color: #cccccc;\n            }\n            .ui-dark-theme .font-select .fs-results li {\n              font-size: 16px;\n              color: #cccccc;\n            }\n            .ui-dark-theme .font-select .fs-results li.active {\n              background: #404040;\n            }\n            .ui-dark-theme .font-select .fs-results {\n              padding-left: 0px;\n            }\n        </style>\n    </div>\n    <script>\n\n        popularFonts = [\"Open+Sans:300,400,600,700\",\"Aclonica\",\"Allan\",\"Annie+Use+Your+Telescope\",\"Anonymous+Pro\",\"Allerta+Stencil\",\"Allerta\",\"Amaranth\",\"Anton\",\"Architects+Daughter\",\"Arimo\",\"Artifika\",\"Arvo\",\"Asset\",\"Astloch\",\"Bangers\",\"Bentham\",\"Bevan\",\"Bigshot+One\",\"Bowlby+One\",\"Bowlby+One+SC\",\"Brawler\",\"Buda:300\",\"Cabin\",\"Calligraffitti\",\"Candal\",\"Cantarell\",\"Cardo\",\"Carter One\",\"Caudex\",\"Cedarville+Cursive\",\"Cherry+Cream+Soda\",\"Chewy\",\"Coda\",\"Coming+Soon\",\"Copse\",\"Corben:700\",\"Cousine\",\"Covered+By+Your+Grace\",\"Crafty+Girls\",\"Crimson+Text\",\"Crushed\",\"Cuprum\",\"Damion\",\"Dancing+Script\",\"Dawning+of+a+New+Day\",\"Didact+Gothic\",\"Droid+Sans\",\"Droid+Sans+Mono\",\"Droid+Serif\",\"EB+Garamond\",\"Expletus+Sans\",\"Fontdiner+Swanky\",\"Forum\",\"Francois+One\",\"Geo\",\"Give+You+Glory\",\"Goblin+One\",\"Goudy+Bookletter+1911\",\"Gravitas+One\",\"Gruppo\",\"Hammersmith+One\",\"Holtwood+One+SC\",\"Homemade+Apple\",\"Inconsolata\",\"Indie+Flower\",\"IM+Fell+DW+Pica\",\"IM+Fell+DW+Pica+SC\",\"IM+Fell+Double+Pica\",\"IM+Fell+Double+Pica+SC\",\"IM+Fell+English\",\"IM+Fell+English+SC\",\"IM+Fell+French+Canon\",\"IM+Fell+French+Canon+SC\",\"IM+Fell+Great+Primer\",\"IM+Fell+Great+Primer+SC\",\"Irish+Grover\",\"Irish+Growler\",\"Istok+Web\",\"Josefin+Sans\",\"Josefin+Slab\",\"Judson\",\"Jura\",\"Jura:500\",\"Jura:600\",\"Just+Another+Hand\",\"Just+Me+Again+Down+Here\",\"Kameron\",\"Kenia\",\"Kranky\",\"Kreon\",\"Kristi\",\"La+Belle+Aurore\",\"Lato:100\",\"Lato:100italic\",\"Lato:300\",\"Lato\",\"Lato:bold\",\"Lato:900\",\"League+Script\",\"Lekton\",\"Limelight\",\"Lobster\",\"Lobster Two\",\"Lora\",\"Love+Ya+Like+A+Sister\",\"Loved+by+the+King\",\"Luckiest+Guy\",\"Maiden+Orange\",\"Mako\",\"Maven+Pro\",\"Maven+Pro:500\",\"Maven+Pro:700\",\"Maven+Pro:900\",\"Meddon\",\"MedievalSharp\",\"Megrim\",\"Merriweather\",\"Metrophobic\",\"Michroma\",\"Miltonian Tattoo\",\"Miltonian\",\"Modern Antiqua\",\"Monofett\",\"Molengo\",\"Montserrat\",\"Mountains of Christmas\",\"Muli:300\",\"Muli\",\"Neucha\",\"Neuton\",\"News+Cycle\",\"Nixie+One\",\"Nobile\",\"Nova+Cut\",\"Nova+Flat\",\"Nova+Mono\",\"Nova+Oval\",\"Nova+Round\",\"Nova+Script\",\"Nova+Slim\",\"Nova+Square\",\"Nunito:light\",\"Nunito\",\"OFL+Sorts+Mill+Goudy+TT\",\"Old+Standard+TT\",\"Open+Sans:300\",\"Open+Sans\",\"Open+Sans:600\",\"Open+Sans:800\",\"Open+Sans+Condensed:300\",\"Orbitron\",\"Orbitron:500\",\"Orbitron:700\",\"Orbitron:900\",\"Oswald\",\"Over+the+Rainbow\",\"Reenie+Beanie\",\"Roboto:400,700,300\",\"Roboto+Slab:300,400,700\",\"Pacifico\",\"Patrick+Hand\",\"Paytone+One\",\"Permanent+Marker\",\"Philosopher\",\"Play\",\"Playfair+Display\",\"Podkova\",\"PT+Sans\",\"PT+Sans+Narrow\",\"PT+Sans+Narrow:regular,bold\",\"PT+Serif\",\"PT+Serif Caption\",\"Puritan\",\"Quattrocento\",\"Quattrocento+Sans\",\"Radley\",\"Raleway:100\",\"Redressed\",\"Rock+Salt\",\"Rokkitt\",\"Ruslan+Display\",\"Schoolbell\",\"Shadows+Into+Light\",\"Shanti\",\"Sigmar+One\",\"Six+Caps\",\"Slackey\",\"Smythe\",\"Sniglet:800\",\"Source+Sans+Pro:400,700\",\"Special+Elite\",\"Stardos+Stencil\",\"Sue+Ellen+Francisco\",\"Sunshiney\",\"Swanky+and+Moo+Moo\",\"Syncopate\",\"Tangerine\",\"Tenor+Sans\",\"Terminal+Dosis+Light\",\"The+Girl+Next+Door\",\"Tinos\",\"Ubuntu\",\"Ultra\",\"Unkempt\",\"UnifrakturCook:bold\",\"UnifrakturMaguntia\",\"Varela\",\"Varela Round\",\"Vibur\",\"Vollkorn\",\"VT323\",\"Waiting+for+the+Sunrise\",\"Wallpoet\",\"Walter+Turncoat\",\"Wire+One\",\"Yanone+Kaffeesatz\",\"Yanone+Kaffeesatz:300\",\"Yanone+Kaffeesatz:400\",\"Yanone+Kaffeesatz:700\",\"Yeseva+One\",\"Zeyada\"];\n\n        var fontSelectBox = controlLayout.find(\"#fontSelectBox\").html();\n        var fontSelectProp = buildCustomProp(\"#fontSelectProp\", fontSelectBox);\n\n        $(function(){\n            $('#fontSelectProp').find('#pickFont').fontselect().change(function(){\n\n                var font = $(this).val().replace(/\\+/g, ' ');\n                font = font.split(':');\n                var fontURL = '//fonts.googleapis.com/css?family=' + $(this).val();\n                if (editFrameContent().find(\"link[href='\" + fontURL + \"']\").length === 0) {\n                    editFrameContent().find(\"head\").find('link:last').after('<link href=\"' + fontURL + '\" rel=\"stylesheet\" type=\"text/css\">');\n                }\n                if (selectedElement().attr('data-font-id') != $(this).val()){\n\n                    var fontCssOld = selectedElement().css('font-family');\n                    var fontIdOld = selectedElement().attr('data-font-id');\n                    if (typeof fontIdOld === \"undefined\"){\n                        fontIdOld = \"\";\n                    }\n\n                    var fontCssNew = font[0];\n                    var fontIdNew = $(this).val();\n                    selectedElement().css('font-family', fontCssNew);\n                    selectedElement().attr('data-font-id', fontIdNew);\n\n                    var elm = selectedElement();\n\n                    undoManager.add({\n                        undo: function () {\n                            eastPanelShowContent(\"#fontSelectProp\");\n                            showIfHidden(elm);\n                            $(\"#fontName\").removeAttr(\"style\");\n\n                            if (fontIdOld == \"\"){\n                                $(\"#fontName\").text('Select a font:');\n                                selectedElement().css('font-family', '');\n                                selectedElement().removeAttr('data-font-id');\n                            }else{\n                                $(\"#fontName\").text(fontCssOld);\n                                selectedElement().css('font-family', fontCssOld);\n                                selectedElement().attr('data-font-id', fontIdOld);\n                            }\n                            resetBreadcrumbAndProps(elm, false, true);\n\n                        },\n                        redo: function () {\n                            eastPanelShowContent(\"#fontSelectProp\");\n                            showIfHidden(elm);\n                            $(\"#fontName\").removeAttr(\"style\");\n                            $(\"#fontName\").text(fontCssNew);\n                            selectedElement().css('font-family', fontCssNew);\n                            selectedElement().attr('data-font-id', fontIdNew);\n                            resetBreadcrumbAndProps(elm, false, true);\n\n                        }\n                    });\n\n                    undoRedoStatus();\n                }\n\n            });\n            $('#removeFont').click(function (event) {\n\n                var fontIdOld = selectedElement().attr('data-font-id');\n\n                if (typeof fontIdOld !== \"undefined\"){\n\n                    var fontCssOld = selectedElement().css('font-family');\n                    $(\"#fontName\").removeAttr(\"style\");\n                    $(\"#fontName\").text('Select a font:');\n                    selectedElement().removeAttr('data-font-id');\n                    selectedElement().css('font-family', '');\n\n                    var elm = selectedElement();\n\n                    undoManager.add({\n                        undo: function () {\n                            eastPanelShowContent(\"#fontSelectProp\");\n                            showIfHidden(elm);\n                            $(\"#fontName\").removeAttr(\"style\");\n                            $(\"#fontName\").text(fontCssOld);\n                            selectedElement().attr('data-font-id', fontIdOld);\n                            selectedElement().css('font-family', fontCssOld);\n                            resetBreadcrumbAndProps(elm, false, true);\n\n                        },\n                        redo: function () {\n                            eastPanelShowContent(\"#fontSelectProp\");\n                            showIfHidden(elm);\n                            $(\"#fontName\").removeAttr(\"style\");\n                            $(\"#fontName\").text('Select a font:');\n                            selectedElement().removeAttr('data-font-id');\n                            selectedElement().css('font-family', '');\n                            resetBreadcrumbAndProps(elm, false, true);\n                        }\n                    });\n\n                    undoRedoStatus();\n                }\n            });\n        });\n\n        addAttribute(\"googleFonts\", \"Fonts\", \"select fonts...\");\n    </script>\n</div>\n<div class=\"onAttributeSelected\">\n    <script>\n        $(\"#googleFonts\").click(function (event) {\n\n            $(\"#fontName\").removeAttr(\"style\");\n\n            if (typeof selectedElement().attr('data-font-id') === \"undefined\"){\n                $(\"#fontName\").text('Select a font:');\n            }else{\n                var fontNameID = selectedElement().attr('data-font-id');\n                fontNameID = fontNameID.replace(/\\+/g, ' ').replace(/:/g, ' ');\n                $(\"#fontName\").text(fontNameID);\n            }\n\n            eastPanelShowContent(\"#fontSelectProp\");\n            event.stopPropagation();\n        });\n    </script>\n</div>\n<div class=\"showAttributes\">\n    <script>\n        showAttribute(inEditor, \"#googleFonts\",\"*\", \".ag-text, .ag-text-edit\");\n    </script>\n</div>\n<div class=\"cleanUpBeforePublish\">\n    <script>\n        var fontList = [];\n\n        pageClone.find('*[data-font-id]').each(function () {\n            var fontURL = '//fonts.googleapis.com/css?family=' + $(this).attr('data-font-id');\n\n            if ($.inArray(fontURL, fontList) === -1){\n                fontList.push(fontURL);\n                styles = styles + '<link href=\"' + fontURL + '\" rel=\"stylesheet\" type=\"text/css\">';\n            }\n        });\n\n        pageClone.find(\"*[data-font-id]\").removeAttr(\"data-font-id\"); \n\n    </script>\n</div>\n</div></div>"};