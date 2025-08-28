import { Link } from "react-router-dom";

function SubBanner(prop) {
    return(
    <section className="other-ban">
    <div className="container">
      <h1>{prop.name}</h1>
      <p><Link to="/" className="other-ban-link">Home</Link> / {prop.page}</p>
    </div>
    </section>
    )
}
export default SubBanner;