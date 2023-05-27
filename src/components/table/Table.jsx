import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Arabica coffee beans",
      img: "https://www.nescafe.com/mena/sites/default/files/arabica-coffee-beans-thumbnail-desktop.jpg",
      customer: "Yelzhas Abdikali",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Robusta coffee beans",
      img: "https://www.nescafe.com/mena/sites/default/files/robusta-coffee-beans-thumbnail-desktop.jpg",
      customer: "Rayimbek Duldiyev",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Liberica Coffee Beans",
      img: "https://coffeeaffection.com/wp-content/uploads/2019/03/Liberica-coffee-beans.webp",
      customer: "Illarion ",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Excelsa Coffee Beans",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0STumiPPnnP-uwrBvBO0C7CZHO9EX8CrmOD-k1pADGorFq8bQoGPkMBALVaHs6S8gFU&usqp=CAU",
      customer: "Nurbolat Nurzhanov",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    }
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
