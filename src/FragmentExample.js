export function FragmentExample() {
  const myArray = [1,2,3,4]
  return (
    <div>
      {myArray.map((myArrayItem, index) => (
        <React.Fragment key={index}>
          <span>This is failed navbar</span>
          <span>This is navbar</span>
        </React.Fragment>
      ))}
      <>
        <span>This is in fragment</span>
      </>
      <React.Fragment>
        <span>This is in fragment too</span>
      </React.Fragment>
    </div>
  )
}