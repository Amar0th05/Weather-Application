let input=document.getElementById("input");
let time=document.getElementById("time");
let deg=document.getElementById("deg");
// deg.style.animationName="amar3";
// deg.style.animationDuration="2s";
// deg.style.animationTimingFunction="easy-in-out"; 
let animation="on";
input.addEventListener(("change"),()=>{ 
    if(animation ==  "on"){
        deg.style.animationName="amar3";
        deg.style.animationDuration="3s";
        deg.style.animationTimingFunction="easy-in-out";
        console.log("if");
        animation="off";
    }
    else if(animation == "off"){
        deg.style.animationName="amar4";
        deg.style.animationDuration="3s";
        deg.style.animationTimingFunction="easy-in-out";
        console.log("elseif");
        animation="on";
    }
    res1=setInterval(()=>{
        let date=new Date();
        let hr=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        let ap;
        let hr1;
        if(hr>=12)
        {
            hr1=hr-12;
            ap="PM";
        }
        else{
            hr1=hr;
            ap="AM";
        }
        time.textContent=`${hr1}:${min}:${sec} ${ap}`;
    });
let loc=document.getElementById("loc");
loc.textContent=input.value;
let place=input.value;
let key="b03863994b4824bd0ede9064b3757e6e";
let prom=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`);
prom
.then((data)=>{
    return data.json();
    
})
.then((data)=>{
    console.log(data);
deg.innerText=`${Math.round(Number(data.main.temp)-273)}\u00B0C`;
})
.catch(()=>{
    console.log("please enter proper city name");
});
});
