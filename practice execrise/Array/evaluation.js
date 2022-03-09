const array = [
  {
  "id": 1,
  "name": "enp1",
  "type": "LAN",
  "ip_address": ["192.168.1.1","192.168.1.2","192.168.1.3"]
  },
  {
  "id": 2,
  "name": "enp2",
  "type": "WAN",
  "ip_address": ["192.168.2.1","192.168.2.2","192.168.2.3"]
  },
  {
  "id": 3,
  "name": "enp3",
  "type": "LAN",
  "ip_address": ["192.168.3.1","192.168.3.2","192.168.3.3"]
  },
  {
  "id": 4,
  "name": "enp4",
  "type": "LAN",
  "ip_address": ["192.168.5.1","192.168.5.2","192.168.5.3"]
  }
]




for(let i=0;i<array.length;i++)
{
  if(array[i].type==='LAN'){
    console.log(array[i]);
  }
}


for(let i=0;i<array.length;i++){
  if(array[i].type==='WAN')
  {
    console.log(array[i]);
  }
}


for(i=0;i<array.length;i++){
  if(array[i].name==='enp1'){
      console.log(array[i].ip_address);
  }
}



let arr=[];
for(i=0;i<array.length;i++)
{

  if(array[i].name==='enp3' || array[i].name==='enp4')
  { 
      arr = arr.concat(array[i].ip_address);
  }
}
console.log(arr);
