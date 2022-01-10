const max_x=640;
 const VF = "svideo_test";
 video_inline = false;
 video_iframe = false;
 
 function vasilisa(w_url,idv,title,dx,dy,/*dt,*/ des)
 {
   
   if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      if (des != undefined || des === "") {btitle = des.replace(/<\/?[a-zA-Z]+>/gi,'');} else {btitle = title;};  
      if (w_url[2] != undefined || w_url[2] === "") {end_of_title = ' - '+w_url[2]+'';} 
        else {end_of_title = "";}; 
      ntitle = title.replace(/\\'/g,"&#39;");
      
      
      str=title;
      str=str.replace(/&#39;/g,'\\\'');
      
      str=str.replace(/\"/g,'&#34;');
      
      str_1=str.replace(/\'/g,'\\\'');
      
      xtitle='['+location.hostname+end_of_title+']'

      +' '+title.replace(/&#34;/g,"\"");
      xtitle = xtitle.replace(/&quot;/g,"\"");
      document.title=xtitle.replace(/&#39;/g,"\'");
      n_y=Math.floor(((max_x*dy)/dx)+0.99);
      
      codestring="<br><a href=\"https://www.google.com/search?q="+str+"\" target=\"_blank\" title=\"спросить google о "+str+"\"><h1><font color=\"black\">"+title+"</font></h1></a><i><font color=\"blue\">немного рекламы от видеохостинга - плата за отсутствие копирастов на нем</font></i><br><br><br><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\"test-14062021\" src=\""+w_url[0]+idv+"\" width=\""+max_x+"\" height=\""+n_y+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\""+VF+"(\'"+w_url[0]+idv+w_url[1]+"\',\'"+x+"\',\'"+y+"\',\'"+str_1+"\')\" title=\""+str_1+"\"><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      if (des != undefined) codestring=codestring+"<br>"+des;
  return codestring;
 };
 
 function kisula(w_url,idv,title,dx,dy,des)
 {
      if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      
      var ph = new RegExp (/^ph.+$/);
      var yt = new RegExp (/^.{11}$/);
      var ok = new RegExp (/^.{11}$/);

      p_title=title;
      p_title=encodeURIComponent(p_title);
      p_title=p_title.replace(/'/g,'\\\'');
      s_title=title.replace(/"/g,'&#34;');
      if ((des == undefined) || (des === ""))
        {
          btitle = title;
        }
        else
        {
          btitle = des.replace(/<\/?[a-zA-Z]+>/gi,'');
        };
        const scripts = document.getElementsByTagName('script');
        const scriptName = scripts[scripts.length-1].src;
        let result = scriptName.match(/^http:\/\/svideo\.tom\.ru\/c\/([a-z]{3})\.js$/);
        idf = result[1];
        str=title;
        str=str.replace(/\'/g,'\\\'');
        str=str.replace(/\"/g,'&#34;');
        codestring = "<strong><a href=\"https://www.google.com/search?q="+title.replace(/\"/g,'&#34;')+"\" target=\"_blank\" title=\"О фильме: "+title.replace(/\"/g,'&#34;')+"\"><font color=\"black\">[?] </font></a><a href=\"/?"+idf+"\" title=\""+btitle+"\" target=\"_blank\"><font color=\"#DF01D7\">[<tt>"+idf+"</tt>] </font></a><a href=\"javascript:void(0);\" onclick=\""+VF+"('"+w_url[0]+idv+w_url[1]+"','"+x+"','"+y+"','"+str+"')\" title=\""+btitle+"\"><font color=\"blue\">"+mtitle+"</font></a></strong>";
        return codestring;
 };
 
 function video_code(video_in_json,file_ex,autoplay,dx,dy)
	{
		video=JSON.parse(video_in_json);
      if (hdd_poster=="")
      {
        
      
		if (file_ex) 
			{
				poster='http://nat.dax.ru/video/posters/img/'+video['id_p8']+'.jpg';
			}
				else
					{
						poster=video['poster'];
					};
     } else {poster=hdd_poster; };  
		if (video['mp4_or_flv']) {url=video['hd_url'];} else {url=video['sd_url'];};
    document.title='['+location.hostname+' - hdd] '+video['name'];
    if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      
      if (video['name'].length>63)
      {
        let result = video['name'].match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=video['name'];
      };
      n_y=Math.floor(((max_x*dy)/dx)+1);      
        codestring="<a href=\"https://www.google.com/search?q="+video['name']+"\" target=\"_blank\" title=\"спросить google о "+video['name']+"\"><h1><font color=\"black\">"+video['name']+"</font></h1></a><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\"06d3730efc83058f497d3d44f2f364e3\" src=\"/video/sites/hdd/dl/?url="+url+"&duration="+video['duration']+"&poster="+poster+"\" width=\""+max_x+"\" height=\""+n_y+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\""+VF+"(\'/video/sites/dl/apl/?url="+url+"&duration="+video['duration']+"\',\'"+x+"\',\'"+y+"\',\'"+video['name']+"\')\" title=\""+video['name']+"\"><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      document.write(codestring);
	};
    
    function video_code_mmr(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://my.mail.ru/video/embed/",
        "?autoplay=1"
        //,"mmr"
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_gdi(idv,title,dx,dy,des)
    {
      
       if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      if (des != undefined) 
        {
          btitle = des.replace(/<\/?[a-zA-Z]+>/gi,'');
          btitle=btitle.replace(/\"/g,'&#34;');
        } else 
          {
            btitle = title;
          };  
      if (video_inline)
      {
        const scripts = document.getElementsByTagName('script');
        const scriptName = scripts[scripts.length-1].src;
        let result = scriptName.match(/^http:\/\/svideo\.tom\.ru\/c\/([a-z]{3})\.js$/);
        idf = result[1];
        codestring = "<strong><a href=\"https://www.google.com/search?q="+title+"\" target=\"_blank\" title=\"О фильме: "+title+"\"><font color=\"black\">[?] </font></a><a href=\"/?"+idf+"\" title=\""+btitle+"\" target=\"_blank\"><font color=\"#DF01D7\">[<tt>"+idf+"</tt>] </font></a><a href=\"javascript:void(0);\" onclick=\""+VF+"('https://drive.google.com/file/d/"+idv+"/preview','"+x+"','"+y+"','"+title+"')\" title=\""+btitle+"\"><font color=\"blue\">"+title+"</font></a></strong>";
      }
      else 
      {
        codestring="<h1>"+title+"</h1><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\""+idv+"\" src=\"https://drive.google.com/file/d/"+idv+"/preview\" width=\""+max_x+"\" height=\""+Math.floor(((max_x*dy)/dx)+1)+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\""+VF+"(\'https://drive.google.com/file/d/"+idv+"/preview\',\'"+x+"\',\'"+y+"\',\'"+title+"\')\" title=\""+title+"\"><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      if (des != undefined) codestring=codestring+"<br>"+des;
      document.title=location.hostname+': '+title;
      };
      
      document.write(codestring);
    };
    
    function video_code_gd(idv,title,dx,dy,des,dt)
    {
      if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      if (video_inline)
      {
        const scripts = document.getElementsByTagName('script');
        const scriptName = scripts[scripts.length-1].src;
        let result = scriptName.match(/^http:\/\/svideo\.tom\.ru\/c\/([a-z]{3})\.js$/);
        idf = result[1];
        codestring = "<strong><a href=\"https://www.google.com/search?q="+title+"\" target=\"_blank\" title=\"О фильме: "+title+"\"><font color=\"black\">[?] </font></a><a href=\"/?"+idf+"\" title=\""+title+"\" target=\"_blank\"><font color=\"#DF01D7\">[<tt>"+idf+"</tt>] </font></a><a href=\"javascript:void(0);\" onclick=\""+VF+"('/video/sites/gd/apl/?"+idv+"','"+x+"','"+y+"','"+title+"')\" title=\""+title+"\"><font color=\"blue\">"+title+"</font></a></strong>";
      }
      else 
      {
        codestring="<h1>"+title+"</h1><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\"\" src=\"/video/sites/gd/?id="+idv+"&duration="+dt+"\" width=\""+max_x+"\" height=\""+Math.floor(((max_x*dy)/dx)+1)+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\""+VF+"(\'/video/sites/gd/apl/?"+idv+"\',\'"+x+"\',\'"+y+"\',\'"+title+"\')\" title=\""+title+"\"><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      if (des != undefined) codestring=codestring+"<br>"+des;
      document.title=location.hostname+': '+title;
      };
      
      document.write(codestring);
    };
    
    
    function video_code_dl(idv,title,dx,dy,des,dt)
    {
      if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      if (video_inline)
      {
        const scripts = document.getElementsByTagName('script');
        const scriptName = scripts[scripts.length-1].src;
        let result = scriptName.match(/^http:\/\/svideo\.tom\.ru\/c\/([a-z]{3})\.js$/);
        idf = result[1];
        codestring = "<strong><a href=\"https://www.google.com/search?q="+title+"\" target=\"_blank\" title=\"О фильме: "+title+"\"><font color=\"black\">[?] </font></a><a href=\"/?"+idf+"\" title=\""+title+"\" target=\"_blank\"><font color=\"#DF01D7\">[<tt>"+idf+"</tt>] </font></a><a href=\"javascript:void(0);\" onclick=\""+VF+"('/video/sites/gd/apl/?"+idv+"','"+x+"','"+y+"','"+title+"')\" title=\""+title+"\"><font color=\"blue\">"+title+"</font></a></strong>";
      }
      else 
      {
        codestring="<h1>"+title+"</h1><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\"\" src=\"/video/sites/dl/?url="+idv+"&duration="+dt+"\" width=\""+max_x+"\" height=\""+Math.floor(((max_x*dy)/dx)+1)+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\""+VF+"(\'/video/sites/dl/apl/?url="+idv+"\',\'"+x+"\',\'"+y+"\',\'"+title+"\')\" title=\""+title+"\"><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      if (des != undefined) codestring=codestring+"<br>"+des;
      document.title=location.hostname+': '+title;
      };
      
      document.write(codestring);
    };
    
    
    function video_code_yt(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://www.youtube.com/embed/",
        "?autoplay=1"
        //,"yt"
      ];
      
      if (idv.length!=11) urls_param[1] = "&autoplay=1";
      
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };

    function video_code_ok(idv,title,dx,dy,des)
    {
       let urls_param = 
      [
        "//ok.ru/videoembed/",
        "?autoplay=1"
        //,"ok"
      ];
      
      if (! /^([0-9]+)$/.test(idv)) urls_param[1] = "&autoplay=1";
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };

    function video_code_ph(idv,title,dx,dy,des)
    {
      if (title.length>63)
      {
        let result = title.match(/^(.{63}).+$/);
        mtitle=result[1]+'...';
      }
      else
      {
        mtitle=title;
      };
      if (dx<max_x) 
      {
        x=max_x;
        y=Math.floor(((max_x*dy)/dx)+1);
      }
      else
      {
        x=dx;
        y=dy;
      };
      p_title=title;
      p_title=encodeURIComponent(p_title);
      p_title=p_title.replace(/'/g,'\\\'');
      s_title=title.replace(/"/g,'&#34;');
      x_title =   title.replace(/&#39;/g,'\'');
      x_title = x_title.replace(/&#34;/g,'\"');
  if (video_inline)
      {
        const scripts = document.getElementsByTagName('script');
        const scriptName = scripts[scripts.length-1].src;
        let result = scriptName.match(/^http:\/\/svideo\.tom\.ru\/c\/([a-z]{3})\.js$/);
        idf = result[1];
        codestring = "<strong><a href=\"https://www.google.com/search?q="+title+"\" target=\"_blank\" title=\"О фильме: "+s_title+"\"><font color=\"black\">[?] </font></a><a href=\"/?"+idf+"\" title=\""+s_title+"\" target=\"_blank\"><font color=\"#DF01D7\">[<tt>"+idf+"</tt>] </font></a><a href=\"javascript:void(0);\" onclick=\"phvideo('https://rt.pornhub.com/embed/"+idv+"','"+x+"','"+y+"','"+p_title+"')\" title=\""+s_title+"\"><strong>"+s_title+"</strong></a></strong>";
      }
      else 
      {
        document.title=location.hostname+': '+x_title;
        codestring="<h1>"+title+"</h1><div align=\"center\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"2\" style=\"text-align: center;\"><tbody><tr><td><iframe id=\"ph60353d290b6fc\" src=\"https://rt.pornhub.com/embed/"+idv+"\" width=\""+max_x+"\" height=\""+Math.floor(((max_x*dy)/dx)+1)+"\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe></td></tr><tr><td><a href=\"javascript:void(0);\" onclick=\"phvideo('https://rt.pornhub.com/embed/"+idv+"','"+x+"','"+y+"','"+p_title+"')\" title=\""+s_title+"\"><span class=\"style4\"></span><button style=\"width:100%;height:30px\"><strong>"+mtitle+"</strong></button></a></td></tr></tbody></table></div>";
      if (des != undefined) codestring=codestring+"<br>"+des;
      };
    document.write(codestring);
    };

    
    function video_code_lj(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://vc.videos.livejournal.com/index/player?player=new&player_template_id=3869&record_id=",
        "&autoplay=1"
      //,'lj'
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_mega(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://mega.nz/embed/",
        ""
        //,"mega"
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_fb(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D",
        "&autoplay=1"
        //,"fb"
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_iframe(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "",
        ""
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_vk(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "",
        "&autoplay=1"
        //,"vk"
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    
    function video_code_rt(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "https://rutube.ru/play/embed/",
        "?autoStart=true"
        //,"rt"
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };
    
    function video_code_serials(idv,title,dx,dy,des)
    {
      let urls_param = 
      [
        "/video/sites/knb/serials/?",
        ""
      ];
      
      if (video_inline)
      {
        codestring=kisula(urls_param,idv,title,dx,dy,des);
      }
      else 
      {
        codestring=vasilisa(urls_param,idv,title,dx,dy,des);
      };
      document.write(codestring);
    };

    
function videotest(){ document.write('<h1>hello world<\/h1>'); };

function mov(x)
 {

 x=x.replace('/video/','/video/embed/');
 x=x.replace('.html','?autoplay=1');
 MyWin=window.open(x,1,'winName=newwin,width=600,height=400,top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 };
 function video(s){
 MyWin=window.open(s,s,'winName=newwin,width=640,height=480,top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');};
 
  function video1(s,p){
 MyWin=window.open(s,s,'winName=newwin,width=640,height=480,top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');};
 
  function video2(s)
  {
 MyWin=window.open('',s,'winName=newwin,width=640,height=480,top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 MyWin.document.write('<html><head><style>html, body, div, iframe {margin:0;padding:0;height:100%;}iframe {display:block;width:100%;border:none;}</style><title>mp4.tom.ru: '+'</title><link href=\'/favicon.ico\' rel=\'shortcut icon\' type=\'image/x-icon\' /></head><body bgcolor="#000000" text="#FFFFFF"><iframe width="560" height="315" src="'+p+'" frameborder="0" allow="autoplay" allowfullscreen></iframe></body>');
  };
   function video4(s)
  {
 MyWin=window.open(s,s,'winName=newwin,width=640,height=480,top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 MyWin.document.write('<html><head><style>html, body, div, iframe {margin:0;padding:0;height:100%;}iframe {display:block;width:100%;border:none;}</style><title>via.dax.ru '+'</title><link href=\'/favicon.ico\' rel=\'shortcut icon\' type=\'image/x-icon\' /></head><body bgcolor="#000000" text="#FFFFFF"><iframe src="'+s+'" frameborder="0" allow="autoplay" allowfullscreen></iframe></body>');
  };
  
  
  function mvideo(s,w,h){
 MyWin=window.open('/video/?'+btoa(s),s,'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');};
 
   function video888(s,w,h){
 if (w=='') { w='300';h='200';};
   
 MyWin=window.open('/video/?'+btoa(s),s,'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');};

function code_ru(s) { return window.btoa(unescape(encodeURIComponent(s)));}

 
function pvideo(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+t+'"}';
codestring = btoa(ddata);
  MyWin=window.open('/video/test/?'+codestring,s,'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 };
 
 function svideo(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(encodeURIComponent(t)))+'"}';
codestring = btoa(ddata);
MyWin=window.open('/video/?'+codestring,
  s,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 };

function phvideo(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(t))+'"}';
codestring = btoa(ddata);
MyWin=window.open('/video/?'+codestring,
  s,
  //1,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');

 };

 
 
 function svideo_test (s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(encodeURIComponent(t)))+'"}';
codestring = btoa(ddata);
MyWin=window.open('',
  s,
  //1,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
  MyWin.document.body.innerHTML = '';
  MyWin.document.write ('<html><head><style>html, body, div, iframe {margin:0;padding:0;height:100%;}iframe {display:block;width:100%;border:none;}</style><title>'+location.hostname+': '+
		t
		+'</title><link href=\'http://nat.dax.ru/favicon.ico\' rel=\'shortcut icon\' type=\'image/x-icon\' /></head><body bgcolor="#000000" text="#FFFFFF"><iframe allow="autoplay" allowfullscreen="" allowposter="" style="border: 0px" src="'+s+'"></iframe></body></html>');
  
 };
 
  function nvideo(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(encodeURIComponent(t)))+'"}';
codestring = btoa(ddata);
MyWin=window.open('',
  s,
  //1,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
  MyWin.document.body.innerHTML = '';
  MyWin.document.write ('<html><head><style>html, body, div, iframe {margin:0;padding:0;height:100%;}iframe {display:block;width:100%;border:none;}</style><title>nat.dax.ru: '+
		t
		+'</title><link href=\'/favicon.ico\' rel=\'shortcut icon\' type=\'image/x-icon\' /></head><body bgcolor="#000000" text="#FFFFFF"><iframe allow="autoplay" allowfullscreen="" allowposter="" style="border: 0px" src="'+s+'"></iframe></body></html>');
  
 };
 
 
 
 function homework(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(encodeURIComponent(t)))+'"}';
codestring = btoa(ddata);
MyWin=window.open(
  '/homework/?'+codestring,
  s,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 };
 
 function schedule(s,w,h,t){ 
ddata = '{"url":"'+s+'","title":"'+window.btoa(unescape(encodeURIComponent(t)))+'"}';
codestring = btoa(ddata);
MyWin=window.open(
  '/schedule/1/',
  s,
  'winName=newwin,width='+w+',height='+h+',top=0,left=0,toolbar=0,location=no,directoties=no,status=no,menubar=no,scrollbars=no,resizable=yes');
 };
