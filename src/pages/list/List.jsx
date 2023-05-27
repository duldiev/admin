import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import DatatableProducts from "../../components/datatable/DatatableProducts";

const List = ({ type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {type === "users" ? <Datatable /> : <DatatableProducts />}
      </div>
    </div>
  );
};

export default List;
