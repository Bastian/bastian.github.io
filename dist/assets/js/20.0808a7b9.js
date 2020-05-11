(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(a,e,o){"use strict";o.r(e);var t=o(43),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"logger-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logger-configuration"}},[a._v("#")]),a._v(" Logger Configuration")]),a._v(" "),o("p",[a._v("Logging is an important tool to keep track of what is going on in your application. Javacord uses the "),o("a",{attrs:{href:"https://logging.apache.org/log4j/2.x/manual/api.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Log4j 2 API"),o("OutboundLink")],1),a._v(", which allows you to use your favorite logging framework to log messages in your own code and have all logging messages end up in the same destination. In case you do not add your own logging framework, a fallback logger is used that logs to the console."),o("br"),a._v("\nIf you want more control, add a proper logging framework that supports your needs and configure it accordingly. You can for example configure log messages on a per-class level, change log levels during runtime, or log to a file or database.")]),a._v(" "),o("h2",{attrs:{id:"fallback-logger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fallback-logger"}},[a._v("#")]),a._v(" 🥈 Fallback Logger")]),a._v(" "),o("p",[a._v("Javacord's fallback logger is a simple Log4j logger which always logs "),o("code",[a._v("INFO")]),a._v(" level and higher. It allows you to enable "),o("code",[a._v("DEBUG")]),a._v(" and "),o("code",[a._v("TRACE")]),a._v(" logging manually. As log levels are hierarchical, enabling "),o("code",[a._v("TRACE")]),a._v(" will also implicitly enable "),o("code",[a._v("DEBUG")]),a._v(", and disabling "),o("code",[a._v("DEBUG")]),a._v(" will also implicitly disable "),o("code",[a._v("TRACE")]),a._v(".")]),a._v(" "),o("div",{staticClass:"language-java extra-class"},[o("pre",{pre:!0,attrs:{class:"language-java"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Enable debug logging")]),a._v("\n"),o("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FallbackLoggerConfiguration")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[a._v("setDebug")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Enable trace logging")]),a._v("\n"),o("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FallbackLoggerConfiguration")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[a._v("setTrace")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),o("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),o("p",[a._v("Changing the log level of the fallback logger only affects newly created loggers. Pre-existing loggers will not have their log level changed. So if you want to configure the fallback logger, you should do this as one of the first actions in your bot code. If you want to change log levels during runtime, you should use a proper logging framework like Log4j 2 Core or another library that supports this.")]),a._v(" "),o("p",[a._v("All fallback logger messages are printed to the standard output stream ("),o("code",[a._v("System.out")]),a._v(") and thus usually to your console. If you want to log to a file, database, or anything else, you should consider using a proper logging framework which allows you to configure this behavior.")]),a._v(" "),o("p",[a._v("This is how a log line from the fallback logger will look like:")]),a._v(" "),o("div",{staticClass:"language-log extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("<time with date            ><level><logger name, usually the logging class              > <message            > <the thread context, here the shard number>\n2018-08-03 20:00:06.080+0200 DEBUG org.javacord.core.util.gateway.DiscordWebSocketAdapter Received HELLO packet {shard=0}\n")])])]),o("h2",{attrs:{id:"using-a-proper-logging-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-a-proper-logging-framework"}},[a._v("#")]),a._v(" 🥇 Using a Proper Logging Framework")]),a._v(" "),o("h3",{attrs:{id:"adding-a-logging-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-logging-framework"}},[a._v("#")]),a._v(" Adding a Logging Framework")]),a._v(" "),o("p",[a._v("Adding a logging framework of your choice is very straightforward. You can just add it as a dependency, and it will be detected by Log4j automatically. The following example adds Log4j 2 using Gradle:")]),a._v(" "),o("div",{staticClass:"language-groovy extra-class"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[a._v("dependencies "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" runtimeOnly "),o("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.apache.logging.log4j:log4j-core:2.11.0'")]),a._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),o("p",[a._v("You can also use an SLF4J compatible logging framework using "),o("code",[a._v("log4j-to-slf4j")]),a._v(". The following example adds Logback Classic using Gradle:")]),a._v(" "),o("div",{staticClass:"language-groovy extra-class"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[a._v("dependencies "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    runtimeOnly "),o("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.apache.logging.log4j:log4j-to-slf4j:2.11.0'")]),a._v("\n    runtimeOnly "),o("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ch.qos.logback:logback-classic:1.2.3'")]),a._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),o("h3",{attrs:{id:"configure-your-logging-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-logging-framework"}},[a._v("#")]),a._v(" Configure Your Logging Framework")]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("Log4j 2")]),a._v(": "),o("a",{attrs:{href:"https://logging.apache.org/log4j/2.x/manual/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Log4j configuration"),o("OutboundLink")],1)]),a._v(" "),o("li",[o("strong",[a._v("Logback Classic")]),a._v(": "),o("a",{attrs:{href:"https://logback.qos.ch/manual/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Logback configuration"),o("OutboundLink")],1)])]),a._v(" "),o("h3",{attrs:{id:"logging-the-relevant-shard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-the-relevant-shard"}},[a._v("#")]),a._v(" Logging the Relevant Shard")]),a._v(" "),o("p",[a._v("Javacord adds the relevant shard to each log message. The facility that stores this information has a different name depending on which logging framework you use. For Log4j 2, this is called Thread Context Map and can be added in a pattern layout with "),o("code",[a._v("%X{shard}")]),a._v(", or you can add the whole thread context map by using "),o("code",[a._v("%X")]),a._v(". For Logback Classic, it is called MDC and can be added with the same pattern expressions as for Log4j.")])])}),[],!1,null,null,null);e.default=n.exports}}]);