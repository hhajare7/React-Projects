const SlotM = (props) => {
    // let x = 'smiley';
    // let y = 'smiley';
    // let z = 'smiley';
  
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;

    let { x , y, z }= props;
  
    if (x === y && y === z) {
      return (
        <>
          <div className="slot">
            <h1>
              {x} {y} {z}
            </h1>
            <h1>This is matching</h1>
            <hr />
  
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slot">
            <h1>
              {x} {y} {z}
            </h1>
            <h1>This is  not matching</h1>
            <hr />
  
          </div>
        </>
      );
    }
  };
  export default SlotM;