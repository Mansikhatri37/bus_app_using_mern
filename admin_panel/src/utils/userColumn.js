import Swal from "sweetalert2"

const showAlert = async (id) => {
    const result = await Swal.fire({
        title: "All data linked to user will be deleted. Are you Sure?",
        showCancelButton: true,
        confirmButtonText: "Delete",
    })
    if (result.isConfirmed) {
        deleteUser(id)
    }
}
const deleteUser = async (id) => {
    const jsonResponse = await fetch(`http://localhost:4000/users/delete-by-id/${id}`,
        {
            method: 'DELETE'
        }
    )
    const status = await jsonResponse.status
    if (status === 200) {
        alert('Deleted Successfully')
    }

}

export const userColumns = [
    {
        name: "User Name",
        selector: (row) => row.username,
        sortable: true
    },
    {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
        // cell: (d) => (
        //     <a href="https://google.com" rel="noreferrer" target="_blank" className="dlink">
        //         {d.director}
        //     </a>
        // )
    },
    {
        name: "Phone",
        selector: (row) => row.phone,
        sortable: true,
        // cell: (d) => <span>{d.genres.join(", ")}</span>
    },
    {
        name: "Actions",
        center: true,
        selector: (row) => (
            <>
                <a href={`/view_user/${row._id}`} className="p-1 ">
                    <i className="fa fa-eye text-navy" />
                </a>

                <button onClick={() => showAlert(row._id)} className="p-1">
                    <i className="fa fa-trash text-danger tx-118-f " />
                </button>
            </>
        ),
        width: "92px",
        cellExport: (row) => "",
    }
];
