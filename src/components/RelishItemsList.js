  const RelishItemsList = ({relishItems, deleteRelish}) => {
    return (
      <ul>
        {
          relishItems.map(item=>{
            return (
              <li key={item.id}>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <button onClick={ () => deleteRelish(item.id) }>Not Right Now</button>
              </li>
            )
          })
        }
      </ul>
    )
  }

  export default RelishItemsList;