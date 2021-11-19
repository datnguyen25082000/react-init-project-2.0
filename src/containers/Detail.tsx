import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchOnePostQuery } from "../redux";
import { CardBox } from "../components";

export const Detail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useFetchOnePostQuery({ image_id: slug });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Detail Cat</h1>
      <CardBox item={data} />
    </div>
  );
};
