import Card from "./card";
const loadData = kee =>
  kee && JSON.parse(sessionStorage.getItem(kee));

const saveData = (kee, data) =>
  sessionStorage.setItem(kee, JSON.stringify(data));

const creatDatalist= (data) =>{
  const listArray = [...data].map((item) =>({
    title : item.title,
    id    : `ss${item.id}`,
    url   : item.url,
  }))
  return listArray;
}  

export{loadData,saveData,creatDatalist};