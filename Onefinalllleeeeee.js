var stri = document.getElementById("tb");
document.addEventListener('input',main);
var s = document.getElementById("ans");

function add()
        {  var string=stri.value;
            var res1 = string.substr(0,3);
          var res2 = string.substr(4);
          var lastchar = res2.length + 1;
        var i = 0;
        var k=1;
        var res = res2.split(/[+ ]/);
        var sum = 0;
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(k<(lastchar/2))
          { sum = sum + parseFloat(j[k]);
            k++;}

        s.innerHTML = sum;
    //}
}
function sub()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length + 1;
           s.innerHTML = lastchar;
        var i = 0;
        var k=1;
        var res = res2.split(/[- ]/);
                var dif = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(k<(lastchar/2))
          { dif = parseFloat(dif) - parseFloat(j[k]);
            k++;}
                       if(!isNaN(dif))
            {
        s.innerHTML = dif;
    }
}
function pro()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length + 1;
           s.innerHTML = lastchar;
        var i = 0;
        var k=1;
        var res = res2.split(/[* ]/);
                var pr= res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(k<(lastchar/2))
          { pr = parseFloat(pr) * parseFloat(j[k]);
            k++;}
                       if(!isNaN(pr))
            {
        s.innerHTML = pr;
    }
    }
function quo()
        {  var string=stri.value;
            var res1 = string.substr(0, 3);
          var res2 = string.substr(4);
          var lastchar = res2.length + 1;
           s.innerHTML = lastchar;
        var i = 0;
        var k=1;
        var res = res2.split(/[/ ]/);
        var qu = res[0];
        var j=[];
        while(i<(lastchar/2))
        { j[i]=parseFloat(res[i]);
             i++;
             }
        while(k<(lastchar/2))
          { qu = parseFloat(qu) / parseFloat(j[k]);
            k++;}
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
if (res1 == "TDL")
    {TDL();
    }
}
