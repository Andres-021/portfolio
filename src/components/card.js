import '../css/card.css';


export default function Card ({linkImg, linkRepo, title}) {

  return(
    <div class="container">
      <div className="card">
        <div className="imgBx">
            <a href={linkRepo}><img src={linkImg}/></a>
        </div>
        <div className="content">
            <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}