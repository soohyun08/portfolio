function ChallengesSolution({ challenges }) {
  return (
    <ol>
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
          </li>
        );
      })}
    </ol>
  );
}

export default ChallengesSolution;
