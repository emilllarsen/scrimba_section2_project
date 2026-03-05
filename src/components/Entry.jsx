export default function Entry(props) {
  return (
    <main className="entryMain">
      <figure className="imgFigure">
        <img
          className="entryImg"
          src={props.img.src}
          alt={props.img.alt}
        />
      </figure>
      <section className="entrySectionInformation">
        <img className="entryMarker" src="../../public/images/marker.png"/>
        <span className="country">{props.country}</span>
        <a className="googleMapsLink" href={props.googleMapsLink} target="_blank">View In Google Maps</a>
        <h2 className="entryMountain">{props.title}</h2>
        <h3 className="entryDate">{props.date}</h3>
        <p className="entryPara">{props.text}</p>
      </section>
    </main>
  );
}
