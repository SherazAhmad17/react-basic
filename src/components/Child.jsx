
const Child = ({name,age,btnName,paragraph}) => {
  return (
   <>
   <h1> this is my Child his name is {name} and his age is {age} </h1>
   <div>
    <button>{btnName}</button>
    <p> {paragraph} </p>
   </div>
   </>
  )
}

export default Child
