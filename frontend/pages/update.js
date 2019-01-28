import UpdateItem from "../components/UpdateItem";

//query stands for query params
const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default Sell;
