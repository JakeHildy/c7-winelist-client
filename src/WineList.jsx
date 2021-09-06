import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Heading, ContextMenu, Text } from "@commerce7/admin-ui";
const { ContextMenuItem } = ContextMenu;

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

  const handleAddWine = () => {
    console.log("Adding Wine");
  };

  return (
    <>
      <Heading>WineList</Heading>
      <ContextMenu>
        <ContextMenuItem icon="wine" onClick={handleAddWine}>
          Add Wine
        </ContextMenuItem>
      </ContextMenu>
      {data &&
        data.wines.map((wine) => {
          return (
            <Card key={wine.id}>
              <Heading level={3}>{wine.title}</Heading>
              <Text>{wine.type}</Text>
              <br />
              <Text>{wine.varietal}</Text>
            </Card>
          );
        })}
    </>
  );
};

export default WineList;
