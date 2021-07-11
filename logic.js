function kloc(){
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    var ap = "AM"

    if(h>=4){
        document.getElementById('gre').innerHTML = "Good Morning"

    }
    if(h>12){
        document.getElementById('gre').innerHTML = "Good Afternoon"
    }
    if(h>15){
        document.getElementById('gre').innerHTML = "Good Evening"
    }

    if(h>20){
        document.getElementById('gre').innerHTML = "Good Night"
    }

    if(h>12){
        ap = "PM"
    }
    if(h>12){
        h = h-12;
    }
    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    document.getElementById("hr").innerHTML = h+" : ";
    document.getElementById("mi").innerHTML = m+" : ";
    document.getElementById("se").innerHTML = s;
    document.getElementById("ap").innerHTML = ap;
}
