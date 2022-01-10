/**
*
*  UTF-8 data encode / decode
*  [url]http://www.webtoolkit.info/[/url]
*
**/
 
var Utf8 = {
 
    // public method for url encoding
    encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    },
 
    // public method for url decoding
    decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
 
        while ( i < utftext.length ) {
 
            c = utftext.charCodeAt(i);
 
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
 
        }
 
        return string;
    }
 
};


function urldecode (str) {
  return decodeURIComponent((str + '').replace(/\+/g, '%20'));
};

decodeBase64 = function(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};

param = location.search.substring(1);
var  long_paramstring = new RegExp (/^m:(.+)$/);
var short_paramstring = new RegExp (/^(sn|gi)?[a-z]{3}$/);

if (short_paramstring.test(param))
 {
 document.write("<script src=\"video.js\"><\/script><br><table align=\"center\" width=\"680\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\"><tr><td><table align=\"center\" width=\"650\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\"><tr><td><script type=\"text\/javascript\" src=\"http://svideo.tom.ru/c/"+param+".js\"><\/script><\/td><\/tr><\/table><br><\/td><\/tr><\/table><br>");
 }
 else
if (long_paramstring.test(param))
 {
 let result = param.match(long_paramstring);
 id = result[1];
 id = urldecode (id);
 id = decodeBase64 (id);
 id = Utf8.encode (id);
 var obj = JSON.parse(id);
 //var obj = JSON.parse(decodeBase64(urldecode(result[1])));
 if (((obj[5]=="") || (typeof obj[5]=='undefined')))
 {
    prefix = "";
 }
 else
 {
  prefix = "<b>О фильме:<\/b> "+obj[5];
 };
 document.write("<script src=\"video.js\"><\/script><br><table align=\"center\" width=\"680\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\"><tr><td><table align=\"center\" width=\"650\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#FFFFFF\"><tr><td><script type=\"text\/javascript\">video_code_"+obj[0]+"(\""+obj[1]+"\",\""+obj[4]+"\","+obj[2]+","+obj[3]+",\""+prefix+"\","+obj[6]+")<\/script><\/td><\/tr><\/table><br><\/td><\/tr><\/table><br>");
 }
 else
 document.write("<div align=\"center\"><script src=\"https:\/\/yastatic.net\/q\/forms-frontend-ext\/_\/embed.js\"><\/script><iframe src=\"https:\/\/forms.yandex.ru\/u\/5efe858584e0a772513d38bd\/?iframe=1\" frameborder=\"0\" name=\"ya-form-5efe858584e0a772513d38bd\" width=\"680\"><\/iframe><\/div>");
