export default function Information(props) {
  function handleClick(event) {
    if (event.target.tagName === "SPAN" && event.target.closest(".delete")) {
      event.currentTarget.remove();
    }
  }

  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News+Story";
  } else {
    image = props.image;
  }

  return (
    <div onClick={handleClick} className="container">
      <div>
        <img className="news-img" src={image} alt="" />
      </div>
      <div className="article-details">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <span className="title">{props.title}</span>
        </a>
        <span className="author">By: {props.author}</span>
        <span className="information">{props.information}</span>
      </div>
      <div className="delete">
        <span>X</span>
      </div>
    </div>
  );
}
