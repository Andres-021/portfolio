import '../css/card.css';


export default function Card ({linkImg, linkRepo, title}) {

  return(
      <div className="card">
        <div className="imgBx">
          {/* <a href={linkRepo}><img src={linkImg}/></a> */}
          <img src={linkImg}/>
        </div>
        <div className="content">
            <a href={linkRepo}><h2>{title}</h2></a>
        </div>
        <div className='arrow'>
          <span></span>
          <span></span>
        </div>
      </div>
  );
}