
const CreateTour = ({id, price, title, info, isRead, image, removeTourOnClick, readMe}) => {
    //makni readMe i napravi lokalni useState
    return (
        <li className='tour' key={id}>
            <img src={image}></img>
            <h4>${price}</h4>
            <h2>{title}</h2>
            <p className={isRead ? "tour-info-full" : "tour-info-clamp"}>{info}</p>
            <h3 onClick={() => {readMe(id)}}>Read More</h3>
            <button onClick={() => {removeTourOnClick(id)}}>Not interested</button>
          </li> 
    )
} 

export default CreateTour;