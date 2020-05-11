(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{380:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"emojis-and-reactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emojis-and-reactions"}},[t._v("#")]),t._v(" Emojis and Reactions")]),t._v(" "),s("p",[t._v("There are two different kinds of emojis in Discord: Unicode emojis and custom emojis.")]),t._v(" "),s("h2",{attrs:{id:"unicode-emojis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicode-emojis"}},[t._v("#")]),t._v(" 🚴 Unicode Emojis")]),t._v(" "),s("h3",{attrs:{id:"what-are-unicode-emojis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-unicode-emojis"}},[t._v("#")]),t._v(" What are Unicode emojis?")]),t._v(" "),s("p",[t._v('Unicode emojis are "normal" text emojis which are supported by (nearly) all chat clients, including Discord. You can find a list with all Unicode emojis here: '),s("a",{attrs:{href:"https://unicode.org/emoji/charts/full-emoji-list.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full Emoji List"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"how-to-use-them-in-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-them-in-messages"}},[t._v("#")]),t._v(" How to use them in messages")]),t._v(" "),s("p",[t._v("You can either directly add them in your code, e.g.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi! 😃"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('or use the normal "tag" like you would in the Client:')]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi! :smiley:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://i.imgur.com/VBiTPq5.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"how-to-use-them-for-reactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-them-for-reactions"}},[t._v("#")]),t._v(" How to use them for reactions")]),t._v(" "),s("p",[t._v('Adding unicode reactions is only possible by using the "real" reaction. It doesn\'t support tags like '),s("code",[t._v(":smiley:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"😃"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// works")]),t._v("\nmessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":smiley:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doesn't work")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://i.imgur.com/Wpp8PNz.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"custom-emojis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-emojis"}},[t._v("#")]),t._v(" 🤸‍♀ Custom Emojis")]),t._v(" "),s("h3",{attrs:{id:"what-are-custom-emojis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-custom-emojis"}},[t._v("#")]),t._v(" What are custom emojis?")]),t._v(" "),s("p",[t._v("Custom emojis are emojis that are created in a server. You can get all custom emojis the bot knows by using "),s("code",[t._v("DiscordApi#getCustomEmojis()")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/5tb3Kxu.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"how-to-use-them-in-messages-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-them-in-messages-2"}},[t._v("#")]),t._v(" How to use them in messages")]),t._v(" "),s("p",[t._v('To use custom emojis, you have to know its "tag", which has the format '),s("code",[t._v("<:name:id>")]),t._v(". You can get it by calling "),s("code",[t._v("CustomEmoji#getMentionTag()")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi! <:javacord:415465982715494402>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEmoji")]),t._v(" emoji "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi! "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" emoji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMentionTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"how-to-use-them-for-reactions-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-them-for-reactions-2"}},[t._v("#")]),t._v(" How to use them for reactions")]),t._v(" "),s("p",[t._v("You can either directly use the custom emoji object or use the tag without the "),s("code",[t._v("<:")]),t._v(" "),s("code",[t._v(">")]),t._v(" if you don't have access a custom emoji object (e.g., because it's from a different shard):")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEmoji")]),t._v(" emoji "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emoji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javacord:415465982715494402"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"how-to-get-the-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-tag"}},[t._v("#")]),t._v(" How to get the tag")]),t._v(" "),s("p",[t._v("Just add a "),s("code",[t._v("\\")]),t._v(" in front of the emoji and press "),s("code",[t._v("Enter")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/9L1WyFm.gif",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/4WTGo7F.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"javacord-emoji-hierarchy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javacord-emoji-hierarchy"}},[t._v("#")]),t._v(' 👑 Javacord Emoji "Hierarchy"')]),t._v(" "),s("p",[t._v("In Javacord, all Emojis are a child of the "),s("code",[t._v("Emoji")]),t._v(" interface:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/YtMKqXe.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"what-is-a-knowncustomemoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-knowncustomemoji"}},[t._v("#")]),t._v(" What is a KnownCustomEmoji?")]),t._v(" "),s("p",[t._v("Known custom emojis are emojis that the bot knows because it's a member of the server with this emoji. A custom emoji can be unknown if someone adds a reaction with an unknown emoji for example. A "),s("code",[t._v("KnownCustomEmoji")]),t._v(" has additional methods like "),s("code",[t._v("getServer()")]),t._v(" or "),s("code",[t._v("updateName(String)")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"recommended-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-libraries"}},[t._v("#")]),t._v(" 👌 Recommended libraries")]),t._v(" "),s("p",[t._v("If you are working a lot with Unicode emojis, it's recommended to use a library like "),s("a",{attrs:{href:"https://github.com/vdurmont/emoji-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("emoji-java"),s("OutboundLink")],1),t._v(". It enables you to do things like the following:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmojiParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseToUnicode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":thumbsup:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);