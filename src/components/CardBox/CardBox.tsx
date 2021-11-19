import { useHistory } from "react-router-dom";
import "./CardBox.scss";

export const CardBox: React.FC<ICardBox> = ({ item }) => {
  const history = useHistory();
  return (
    <div
      className="card-box"
      onClick={() => {
        history.push(`/post/${item?.id}`);
      }}
    >
      <div className="card-box__image">
        <img src={item?.url}></img>
      </div>

      <span className="card-box__name">{item?.url}</span>
    </div>
  );
};
