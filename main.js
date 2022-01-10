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
 //id = result[1];
 //id = urldecode (id);
 //id = decodeBase64 (id);
 //var obj = JSON.parse(id);
 var obj = JSON.parse(decodeBase64(urldecode(result[1])));
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
