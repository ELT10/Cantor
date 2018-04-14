var stri = document.getElementById("tb");
document.addEventListener('input',main);
var s = document.getElementById("ans");
var h = document.getElementById("h1");
var he1 = document.getElementById("h2");
var he2 = document.getElementById("h3");
var he3 = document.getElementById("h4");
var he4 = document.getElementById("h5");
var he5 = document.getElementById("h6");
var hek = document.getElementById("hk");
function add()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length;
        var i = 0;
        var k=0;
        var w=0;
        var to=0;
        var res = res2.split(/[+ ]/);
        var sum = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(j[w])
        {
          to= to + 1;
          w++;
        }
            for(k=1;k<to;k++)
          { sum = parseFloat(sum) + parseFloat(j[k]);
            }
                       if(!isNaN(sum))
            {
             s.innerHTML = sum;
            }
}
function sub()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length;
        var i = 0;
        var k=0;
        var w=0;
        var to=0;
        var res = res2.split(/[- ]/);
        var dif = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(j[w])
        {
          to= to + 1;
          w++;
        }
            for(k=1;k<to;k++)
          { dif = parseFloat(dif) - parseFloat(j[k]);
            }
                       if(!isNaN(dif))
            {
             s.innerHTML = dif;
            }
}
function pro()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length;
        var i = 0;
        var k=0;
        var w=0;
        var to=0;
        var res = res2.split(/[* ]/);
        var pr = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(j[w])
        {
          to= to + 1;
          w++;
        }
            for(k=1;k<to;k++)
          { pr = parseFloat(pr) * parseFloat(j[k]);
            }
                       if(!isNaN(pr))
            {
             s.innerHTML = pr;
            }
}
function quo()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length;
        var i = 0;
        var k=0;
        var w=0;
        var to=0;
        var res = res2.split(/[/ ]/);
        var qu = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(j[w])
        {
          to= to + 1;
          w++;
        }
            for(k=1;k<to;k++)
          { qu = parseFloat(qu) / parseFloat(j[k]);
            }
                       if(!isNaN(qu))
            {
             s.innerHTML = qu;
            }
}
function ChC()
    {   var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
        if(res2 == "red")
          { document.body.style.backgroundImage = "url('http://img08.deviantart.net/448f/i/2015/094/c/8/red_polygon_background_by_texturezine-d8occxd.jpg')";
            document.getElementById("tb").style.color = "yellow";
            document.getElementById("name").style.color = "orange";
          }
         if(res2 == "blue")
            document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/f5/e7/73/f5e773f77a32bac74c9e98d4c3512ba5.jpg')";
      if(res2 == "green")
            document.body.style.backgroundImage = "url('http://www.siwallpaperhd.com/wp-content/uploads/2016/07/green_polygons_desktop_wallpaper_1080p.jpg')";
      if(res2 == "black")
           {
               document.body.style.backgroundImage = "url('https://newevolutiondesigns.com/images/freebies/polygon-wallpaper-12.jpg')";
               document.getElementById("tb").style.color = "white";
               document.getElementById("name").style.color = "white";
               document.getElementById("inin").style.color = "white";
               document.getElementById("ver").style.color = "white";
               document.getElementById("ans").style.color = "white";
           }
      if(res2 == "yellow")
            document.body.style.backgroundImage = "url('https://www.skotcher.com/wall/1d8908a532825c0c617678a5f4bef189/abstract-polygon-art-yellow.jpg')";
      if(res2 == "violet")
            document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/69/e9/3c/69e93ced914a9230dcf2b9ba160f129f.jpg')";
    }
function main()
{
    var string=stri.value;
var res1 = string.substr(0, 3);
var res2 = string.substr(4);
var lastChar = res2.length + 1;
document.getElementById("ch").style.visibility = "hidden";
    
if (res1 == "add")
    { 
        add(); 
    }
if (res1 == "sub")
    { 
        sub(); 
    }
if (res1 == "pro")
    { 
        pro(); 
    }
if (res1 == "div")
    { 
        quo(); 
    }
if (res1 == "ChC")
    {
        ChC();
    }
if (res1 == "GoS")
    {document.getElementById("ch").style.visibility = "visible";
        document.getElementById('smname').value = 1;
    }
if (res1 == "FaS")
    {document.getElementById("ch").style.visibility = "visible";
        document.getElementById('smname').value = 2;
    }
if (res1 == "AaS")
    {document.getElementById("ch").style.visibility = "visible";
        document.getElementById('smname').value = 3;
    }
if (res1 == "YoS")
    {document.getElementById("ch").style.visibility = "visible";
        document.getElementById('smname').value = 4;
    }
if (res1 == "Map")
    {document.getElementById("ch").style.visibility = "visible";
        document.getElementById('smname').value = 5;
    }
if (res1 == "hlp")
    {
        h.innerHTML="Instructions"
        he1.innerHTML="1,  Keywords are : (1)add (2)sub (3)pro (4)div (5)ChC (6)GoS (7)FaS (8)AaS (9)YoS (10)Map ";
        hek.innerHTML="2,  Syntax:-   keyword : operation/search/color ;  eg:- add:1+2, ChC:black, GoS:butterfly";
        he2.innerHTML="3,  (1),(2),(3) and (4) are arithematic operations.Enter values to perform operations,as per the syntax."
        he3.innerHTML="4,  'ChC' is used to change the background of the page.Try it out using blue,red,yellow,etc."
        he4.innerHTML="5,  'Gos' is used to search Google.'FaS' is used to search Facebook.'AaS' is used to search Amazon.'Yos' is used to search youtube.'Map' can be used to search and find any location."
        he5.innerHTML="6,  While using the searching features, a hidden button appears as an underline to the heading 'CANTOR'.Press on it to search."
    }

}
