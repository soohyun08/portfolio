function ChallengesSolution({ challenges, path }) {
  return (
    <ol className="challenges">
      {challenges.map((list) => {
        return (
          <li key={list.id}>
            <h5>{list.title}</h5>
            <p>
              <strong>Challenges : </strong>
              {list.challenges}
            </p>
            <p>
              <strong>Solution : </strong>
              {list.solution}
            </p>
            <img src={path + list.img} alt={list.title} />
          </li>
        );
      })}
    </ol>
  );
}

export default ChallengesSolution;
