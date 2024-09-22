import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import GDataTable from '../../components/datatable/GDataTable'
import { userColumns } from '../../utils/userColumn'
import StatCard from '../../components/StatCard'

export default function Users() {
    const { users } = useLoaderData()
    const [stats] = useState([
        {
            title: "Total Users",
            value: 200
        },
        {
            title: "Male Users",
            value: 100
        },
        {
            title: "Female Users",
            value: 78
        },
        {
            title: "Other Users",
            value: 22
        }

    ])

    return (
        <div className="wrapper wrapper-content">
            <div className='row'>
                {
                    stats.map((card, index) => <StatCard title={card.title} value={card.value} key={index} />)
                }
            </div>
            <div className='ibox'>
                <div className='ibox-title'>
                    <h5>Users</h5>
                    <div className='ibox-tools'>
                        <a className='close-link' href='create-user'>
                            <i className='fa fa-plus' />
                        </a>
                    </div>
                </div>
                <div className='ibox-content'>
                    <GDataTable data={users} columns={userColumns} />
                </div>
            </div>
        </div>

    )
}
