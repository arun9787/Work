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
  "name": "enp",
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




let result = array.find(function(arrays){
  return arrays.type === "LAN"
})
console.log(result);

let result1 = array.find(function(arrays){
  return arrays.type === "WAN"
})
console.log(result1);


console.log(array[0].ip_address);

let newArray = [array[2].ip_address,array[3].ip_address];
console.log(newArray);
console.log(newArray.flat());
