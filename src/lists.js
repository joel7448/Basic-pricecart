function Lists(props) {
  return (
    <ul class="list-group list-group-horizontal-xxl">
      <li class="list-group-item">
        {props.itemname.title} <span>${props.itemname.price}</span>
      </li>
    </ul>
  );
}

export default Lists;
