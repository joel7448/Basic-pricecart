

function Card(a){
    return( <div className='col-lg-4'>
    <div className="card" style={{width: "15rem"}}>
    <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random() *50)}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{a.name.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6>${a.name.price}</h6>
    <a href="#" className="btn btn-primary" onClick={()=>a.addtocart(a.name.id)}>Add to cart +</a>
  </div>
</div>
</div>
)
}

export default Card