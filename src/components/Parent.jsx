import Child from "./Child"
import Child2 from "./Child2"

const Parent = () => {
  return (
    <>
    <Child name={"harry"} age={45} paragraph={"hello child 1  tetsing props"} btnName={"chick me"}/>
    <Child2 c2Name={"child2 prop"} c2paragraph={"this is child2 p tag testing props"}/>
    </>
  )
}

export default Parent
