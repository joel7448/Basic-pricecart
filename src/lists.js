function Lists(props) {
  return (
    <ul class="list-group list-group-horizontal-xxl">
      <li class="list-group-item" style={{display:"flex",justifyContent:"space-around"}}>
        {props.itemname.title} ${props.itemname.price}
        <p> <span onClick={()=>props.del(props.itemname.id)} >x</span></p>
      </li>
      
    </ul>
  );
}

export default Lists;
