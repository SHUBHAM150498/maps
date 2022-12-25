    var s='abcadeecfb';
    let n=s.length;
    let set=new Set();
    for(let i = 0;i < n;i++){
    set.add(s.charAt(i));
    }
    console.log(set);


    function printChar(s){
        var map=new Map();
        s.split('').forEach((element)=>{
            if(map.has(element)){
                map.set(element,map.get(element)+1)
            }
            else{
                map.set(element,1)
            }
        });
        s.split('').forEach((i)=>{
            if(map.has(i) && map.get(i)!=0){
                console.log(i + "="+map.get(i)+' ');
                map.set(i,0)
            }
        })
    
    }
    var s="abcadeecfb";
    printChar(s)