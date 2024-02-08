export default function Card({item ,style}){
return (
    <div style={{...style,...{ display: "flex" }}}>
      <img 
        src={item.url}
        alt={item.title}
        width={50}
      />
      <p>
        {item.title} 
      </p>
    </div>
  );
}