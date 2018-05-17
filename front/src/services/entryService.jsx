//const baseUrl = 'http://localhost:3000/api/entries/';

const baseUrl = '/api/entries/'

export function getItems(){
  return fetch(baseUrl)
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(items=>{
    return items;
  });
}

export function getSingleItem(id){
  return fetch(baseUrl + id)
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(item=>{
    return item;
  });
}

//create 
//recibe un item que se va a crear
export function addItem(item){

    //esto ya lo tiene JS
const form = new FormData();
for (let key in item ){
    form.append(key, item[key])
}
 return  fetch(baseUrl, {
    method: 'post',
    body: form
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
   return  res.json()
  })
  .then(items=>{
    return items;
  });
}


export function editItem(id, item){
  return fetch(baseUrl + id, {
    method: 'patch',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(item=>{
    return item;
  });
}

export function removeItem(id, item){
return  fetch(baseUrl + id, {
    method: 'delete',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    res.json()
  })
  .then(items=>{
    return items;
  });
}