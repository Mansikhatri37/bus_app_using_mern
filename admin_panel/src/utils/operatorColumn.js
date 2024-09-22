import Swal from "sweetalert2";

const showAlert = async (id) => {
  const result = await Swal.fire({
    title: "All data linked to user will be deleted. Are you Sure?",
    showCancelButton: true,
    confirmButtonText: "Delete",
  });
  if (result.isConfirmed) {
    deleteOperator(id);
  }
};
const deleteOperator = async (id) => {
  const jsonResponse = await fetch(
    `http://localhost:4000/operator/delete-by-id/${id}`,
    {
      method: "DELETE",
    }
  );
  const status = await jsonResponse.status;
  if (status === 200) {
    alert("Deleted Successfully");
  }
};

export const operatorColumns = [
  {
    name: "Operator Name",
    selector: (row) => row.operatorname,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
   
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
   
  },
  {
    name: "Actions",
    center: true,
    selector: (row) => (
      <>
        <a href={`/view_operator/${row._id}`} className="p-1 ">
          <i className="fa fa-eye text-navy" />
        </a>

        <button onClick={() => showAlert(row._id)} className="p-1">
          <i className="fa fa-trash text-danger tx-118-f " />
        </button>
      </>
    ),
    width: "92px",
    cellExport: (row) => "",
  },
];
