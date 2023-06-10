import React from "react";
import { Button } from "@mantine/core";
import AdminLayout from "@/components/layouts/AdminLayout";
import { gql, useQuery } from "@apollo/client";

const GET_ITEMS = gql`
  query INVEMTORY_ITEMS {
    inventoryItems {
      nodes {
        _id
        name
        description
      }
    }
  }
`;

const HomePage = () => {
  const { loading, data, error } = useQuery(GET_ITEMS);

  return (
    <AdminLayout>
      <h1>Holme Page</h1>
      <pre>{loading && "Loading..."}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </AdminLayout>
  );
};

export default HomePage;
