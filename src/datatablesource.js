export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Coffee",
    width: 230,
  },

  {
    field: "description",
    headerName: "Description",
    width: 100,
  },
  {
    field: "category",
    headerName: "Category",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Yelzhas",
    img: "https://www.interviewbit.com/blog/wp-content/uploads/2021/09/frontend.jpg",
    status: "FrontEND",
    email: "Yelzhas_Starosta",
    age: 19,
  },
  {
    id: 2,
    username: "Rayimbek Duldiyev",
    img: "https://www.awebsiteclinic.com/wp-content/uploads/2020/09/69b61ccc744eea7aa3efa1d5e5f8677f.png",
    email: "RealRay",
    status: "Mobile Dev",
    age: 20,
  },
  {
    id: 3,
    username: "Nurbolat Nurzhanov",
    img: "https://www.interviewbit.com/blog/wp-content/uploads/2021/09/backend.jpg",
    email: "NurboKing",
    status: "Backend",
    age: 20,
  },
];
