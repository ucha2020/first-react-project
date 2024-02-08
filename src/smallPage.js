import Card from "./card"

export default function SmallPage({dataList, cardNumber = 15, save = false}){
    const smallDataList = dataList.filter(
        (value,index) => index <= cardNumber )
            if(save){
                sessionStorage.setItem(`ss${smallDataList.length}`, JSON.stringify(smallDataList));
            }    
    return(<ol>
        {smallDataList.map((value,) =><li
            key={value.id}><Card item={value} style/> 
        </li> )
        }
     </ol> )    
}