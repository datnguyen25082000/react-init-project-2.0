import { useState } from "react";
import { CardBox } from "../components";
import { useFetchAllPostQuery, useAppSelector } from "../redux";

export const Home = () => {
  const [page, setPage] = useState(0);
  const { isFetching } = useFetchAllPostQuery({
    limit: 10,
    page: page,
  });

  const { data } = useAppSelector((state) => state.postSlice);

  return (
    <>
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          marginBottom: 50,
          marginTop: 50,
        }}
      >
        NTD CAT LIST
      </h1>
      {data ? (
        data.map((item: any, i: any) => {
          return <CardBox item={item} key={i} />;
        })
      ) : (
        <></>
      )}

      <button onClick={() => setPage(page + 1)}>
        {isFetching ? "isFetching" : "Next"}
      </button>
    </>
  );
};
