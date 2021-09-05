import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ALL_WINES = gql`
  {
    wines {
      id
      title
      type
      varietal
    }
  }
`;

const WineList = () => {
  const { data, loading, error } = useQuery(ALL_WINES);

  return (
    <>
      <h2>WineList</h2>
      {data &&
        data.wines.map((wine) => {
          return (
            <div key={wine.id}>
              <h3>{wine.title}</h3>
              <h4>{wine.type}</h4>
              <p>{wine.varietal}</p>
            </div>
          );
        })}
    </>
  );
};

export default WineList;
