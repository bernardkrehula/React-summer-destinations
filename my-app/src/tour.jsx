
const CreateTour = (tour) => {
   const { id, price, title, info, isInterested, image } = tour; 
    return (
        <li className='tour' key={id}>
            <img src={image}></img>
            <h4>${price}</h4>
            <h2>{title}</h2>
            <p>{info}</p>
            <h3>Read More</h3>
            <button>Not interested</button>
          </li> 
    )
} 

export default CreateTour;