function Functions({ functions }) {
  return (
    <>
      {functions.map((list) => {
        return (
          <ul key={list.id}>
            <li>
              <h5>{list.name} : </h5>
              <ul>
                <li>{list.des1}</li>
                <li>{list.des2}</li>
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Functions;
