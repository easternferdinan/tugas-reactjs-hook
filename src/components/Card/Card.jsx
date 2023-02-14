import "./style/card.css";

function Card(props) {
    return (
        <div className="card-container">
            <img
                className="card-thumbnail"
                src={props.thumbnail}
                alt="Thumbnail"
            />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <small className="card-info">{props.date}</small>
                <p className="card-description">{props.description}</p>
                <div className="card-footer">
                    <a className="card-link" href={props.url}>
                        Baca
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
