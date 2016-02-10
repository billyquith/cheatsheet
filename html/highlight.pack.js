/*! highlight.js v9.1.0 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function n(e,t){var r=e&&e.exec(t);return r&&0==r.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var t,r,n,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",r=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return E(r[1])?r[1]:"no-highlight";for(i=i.split(/\s+/),t=0,n=i.length;n>t;t++)if(E(i[t])||a(i[t]))return i[t]}function c(e,t){var r,n={};for(r in e)n[r]=e[r];if(t)for(r in t)n[r]=t[r];return n}function s(e){var t=[];return function n(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(t.push({event:"start",offset:a,node:i}),a=n(i,a),r(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:i}));return a}(e,0),t}function o(e,n,a){function i(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function c(e){function n(e){return" "+e.nodeName+'="'+t(e.value)+'"'}u+="<"+r(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function s(e){u+="</"+r(e)+">"}function o(e){("start"==e.event?c:s)(e.node)}for(var l=0,u="",b=[];e.length||n.length;){var f=i();if(u+=t(a.substr(l,f[0].offset-l)),l=f[0].offset,f==e){b.reverse().forEach(s);do o(f.splice(0,1)[0]),f=i();while(f==e&&f.length&&f[0].offset==l);b.reverse().forEach(c)}else"start"==f[0].event?b.push(f[0].node):b.pop(),o(f.splice(0,1)[0])}return u+t(a.substr(l))}function l(e){function t(e){return e&&e.source||e}function r(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var s={},o=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof a.k?o("keyword",a.k):Object.keys(a.k).forEach(function(e){o(e,a.k[e])}),a.k=s}a.lR=r(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=t(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=r(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var l=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(c(e,t))}):l.push("self"==e?a:e)}),a.c=l,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,i);var u=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}n(e)}function u(e,r,a,i){function c(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function s(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function o(e,t){return!a&&n(t.iR,e)}function f(e,t){var r=h.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var a=n?"":v.classPrefix,i='<span class="'+a,c=r?"":"</span>";return i+=e+'">',i+t+c}function d(){if(!y.k)return t(k);var e="",r=0;y.lR.lastIndex=0;for(var n=y.lR.exec(k);n;){e+=t(k.substr(r,n.index-r));var a=f(y,n);a?(M+=a[1],e+=p(a[0],t(n[0]))):e+=t(n[0]),r=y.lR.lastIndex,n=y.lR.exec(k)}return e+t(k.substr(r))}function g(){var e="string"==typeof y.sL;if(e&&!w[y.sL])return t(k);var r=e?u(y.sL,k,!0,C[y.sL]):b(k,y.sL.length?y.sL:void 0);return y.r>0&&(M+=r.r),e&&(C[y.sL]=r.top),p(r.language,r.value,!1,!0)}function m(){L+=void 0!==y.sL?g():d(),k=""}function N(e,t){L+=e.cN?p(e.cN,"",!0):"",y=Object.create(e,{parent:{value:y}})}function _(e,t){if(k+=e,void 0===t)return m(),0;var r=c(t,y);if(r)return r.skip?k+=t:(r.eB&&(k+=t),m(),r.rB||r.eB||(k=t)),N(r,t),r.rB?0:t.length;var n=s(y,t);if(n){var a=y;a.skip?k+=t:(a.rE||a.eE||(k+=t),m(),a.eE&&(k=t));do y.cN&&(L+="</span>"),y.skip||(M+=y.r),y=y.parent;while(y!=n.parent);return n.starts&&N(n.starts,""),a.rE?0:t.length}if(o(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.cN||"<unnamed>")+'"');return k+=t,t.length||1}var h=E(e);if(!h)throw new Error('Unknown language: "'+e+'"');l(h);var R,y=i||h,C={},L="";for(R=y;R!=h;R=R.parent)R.cN&&(L=p(R.cN,"",!0)+L);var k="",M=0;try{for(var I,S,T=0;;){if(y.t.lastIndex=T,I=y.t.exec(r),!I)break;S=_(r.substr(T,I.index-T),I[0]),T=I.index+S}for(_(r.substr(T)),R=y;R.parent;R=R.parent)R.cN&&(L+="</span>");return{r:M,value:L,language:e,top:y}}catch(x){if(-1!=x.message.indexOf("Illegal"))return{r:0,value:t(r)};throw x}}function b(e,r){r=r||v.languages||Object.keys(w);var n={r:0,value:t(e)},a=n;return r.forEach(function(t){if(E(t)){var r=u(t,e,!1);r.language=t,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function f(e){return v.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,v.tabReplace)})),v.useBR&&(e=e.replace(/\n/g,"<br>")),e}function p(e,t,r){var n=t?R[t]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function d(e){var t=i(e);if(!a(t)){var r;v.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var n=r.textContent,c=t?u(t,n,!0):b(n),l=s(r);if(l.length){var d=document.createElementNS("http://www.w3.org/1999/xhtml","div");d.innerHTML=c.value,c.value=o(l,s(d),n)}c.value=f(c.value),e.innerHTML=c.value,e.className=p(e.className,t,c.language),e.result={language:c.language,re:c.r},c.second_best&&(e.second_best={language:c.second_best.language,re:c.second_best.r})}}function g(e){v=c(v,e)}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,d)}}function N(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)}function _(t,r){var n=w[t]=r(e);n.aliases&&n.aliases.forEach(function(e){R[e]=t})}function h(){return Object.keys(w)}function E(e){return e=(e||"").toLowerCase(),w[e]||w[R[e]]}var v={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},R={};return e.highlight=u,e.highlightAuto=b,e.fixMarkup=f,e.highlightBlock=d,e.configure=g,e.initHighlighting=m,e.initHighlightingOnLoad=N,e.registerLanguage=_,e.listLanguages=h,e.getLanguage=E,e.inherit=c,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(t,r,n){var a=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},n={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,n,t]}}),e.registerLanguage("basic",function(e){return{cI:!0,i:"^.",l:"[a-zA-Z][a-zA-Z0-9_$%!#]*",k:{keyword:"ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"},c:[e.QSM,e.C("REM","$",{r:10}),e.C("'","$",{r:0}),{cN:"symbol",b:"^[0-9]+ ",r:10},{cN:"number",b:"\\b([0-9]+[0-9edED.]*[#!]?)",r:0},{cN:"number",b:"(&[hH][0-9a-fA-F]{1,4})"},{cN:"number",b:"(&[oO][0-7]{1,6})"}]}}),e.registerLanguage("cmake",function(e){return{aliases:["cmake.in"],cI:!0,k:{keyword:"add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches"},c:[{cN:"variable",b:"\\${",e:"}"},e.HCM,e.QSM,e.NM]}}),e.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",n={cN:"subst",b:/#\{/,e:/}/,k:t},a=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,n]},{b:/"/,e:/"/,c:[e.BE,n]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[n,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+r},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];n.c=a;var i=e.inherit(e.TM,{b:r}),c="(\\(.*\\))?\\s*\\B[-=]>",s={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(a)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:a.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+c,e:"[-=]>",rB:!0,c:[i,s]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:c,e:"[-=]>",rB:!0,c:[s]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),e.registerLanguage("cpp",function(e){var t={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[e.inherit(e.QSM,{b:'((u8?|U)|L)?"'}),{b:'(u8?|U)?R"',e:'"',c:[e.BE]},{b:"'\\\\?.",e:"'",i:"."}]},n={cN:"number",v:[{b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{b:e.CNR}],r:0},a={cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef"},c:[{b:/\\\n/,r:0},{bK:"include",e:"$",k:{"meta-keyword":"include"},c:[e.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:"<",e:">",i:"\\n"}]},r,e.CLCM,e.CBCM]},i=e.IR+"\\s*\\(",c={keyword:"int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"};return{aliases:["c","cc","h","c++","h++","hpp"],k:c,i:"</",c:[t,e.CLCM,e.CBCM,n,r,a,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,c:["self",t]},{b:e.IR+"::",k:c},{bK:"new throw return else",r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:c,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:c,r:0,c:[e.CLCM,e.CBCM,r,n]},e.CLCM,e.CBCM,a]}]}}),e.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:t,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}}),e.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),e.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},i={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return r.splice(r.length,0,a,i),{c:r,k:t,i:"\\S"}}),e.registerLanguage("lua",function(e){var t="\\[=*\\[",r="\\]=*\\]",n={b:t,e:r,c:["self"]},a=[e.C("--(?!"+t+")","$"),e.C("--"+t,r,{c:[n],r:10})];return{l:e.UIR,k:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},c:a.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:a}].concat(a)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:r,c:[n],r:5}])}}),e.registerLanguage("moonscript",function(e){var t={keyword:"if then not for in while do return else break continue switch and or unless when|5 class extends super local import export",literal:"true false nil",built_in:"print pairs ipairs"},r="[A-Za-z$_][0-9A-Za-z$_]*",n={cN:"subst",b:/#\{/,e:/}/,k:t},a=[e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'/,e:/'/,c:[e.BE]},{b:/"/,e:/"/,c:[e.BE,n]}]},{cN:"builtin",b:"@__"+e.IR},{cN:"variable",b:"@"+e.IR},{cN:"variable",b:e.IR+"\\\\"+e.IR}];n.c=a;var i=e.inherit(e.TM,{b:r}),c="(\\(.*\\))?\\s*\\B[-=]>",s={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(a)}]};return{aliases:["moon"],k:t,i:/\/\*/,c:a.concat([e.C("--","$"),{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+c,e:"[-=]>",rB:!0,c:[i,s]},{b:/[\(,:=]\s*/,r:0,c:[{cN:"function",b:c,e:"[-=]>",rB:!0,c:[s]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"name",b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),e.registerLanguage("python",function(e){var t={cN:"meta",b:/^(>>>|\.\.\.) /},r={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},n={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},a={cN:"params",b:/\(/,e:/\)/,c:["self",t,n,r]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,n,r,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,a,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}}),e.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",n={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},i=[e.C("#","$",{c:[n]}),e.C("^\\=begin","^\\=end",{c:[n],r:10}),e.C("^__END__","\\n$")],c={cN:"subst",b:"#\\{",e:"}",k:r},s={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},o={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},l=[s,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(i)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[s,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,{cN:"regexp",c:[e.BE,c],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(i),r:0}].concat(i);c.c=l,o.c=l;var u="[>?]>",b="[\\w#]+\\(\\w+\\):\\d+:\\d+>",f="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",p=[{b:/^\s*=>/,starts:{e:"$",c:l}},{cN:"meta",b:"^("+u+"|"+b+"|"+f+")",starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:i.concat(p).concat(l)}}),e.registerLanguage("yaml",function(e){var t={literal:"{ } true false yes no Yes No True False null"},r="^[ \\-]*",n="[a-zA-Z_][\\w\\-]*",a={cN:"attr",v:[{b:r+n+":"},{b:r+'"'+n+'":'},{b:r+"'"+n+"':"}]},i={cN:"template-variable",v:[{b:"{{",e:"}}"},{b:"%{",e:"}"}]},c={cN:"string",r:0,v:[{b:/'/,e:/'/},{b:/"/,e:/"/}],c:[e.BE,i]};return{cI:!0,aliases:["yml","YAML","yaml"],c:[a,{cN:"meta",b:"^---s*$",r:10},{cN:"string",b:"[\\|>] *$",rE:!0,c:c.c,e:a.v[0].b},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0,r:0},{cN:"type",b:"!!"+e.UIR},{cN:"meta",b:"&"+e.UIR+"$"},{cN:"meta",b:"\\*"+e.UIR+"$"},{cN:"bullet",b:"^ *-",r:0},c,e.HCM,e.CNM],k:t}}),e});