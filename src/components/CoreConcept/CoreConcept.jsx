import './CoreConcept.css';

export default function CoreConcept({image, title, description}) { // Can also destructure props in the function signature
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}