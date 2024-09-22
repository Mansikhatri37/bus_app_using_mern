import { useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

export default function GDataTable({ data, columns }) {
    const tableData = useMemo(
        () => ({
            columns,
            data,
        }),
        [columns, data])

    useEffect(() => {
        console.log(tableData)
    }, [tableData])

    return (
        <div>
            <DataTableExtensions
                print
                export
                exportHeaders
                fileName={`Ghumantoo`}
                {...tableData}
            >
                <DataTable
                    data={data}
                    columns={columns}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    dense={true}
                    paginationDefaultPage={1}
                    paginationRowsPerPageOptions={[50, 100, 150, 200]}
                    paginationPerPage={50}
                />
            </DataTableExtensions>
        </div>
    )
}

