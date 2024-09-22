import React from 'react'

export default function StatCard({ title, value = 0 }) {
    return (
        <div className='col-lg-3'>
            <div className="ibox">
                <div className="ibox-title">
                    <span className="label label-success float-right">Upto Now</span>
                </div>
                <div className="ibox-content">
                    <h1 className="no-margins">{value}</h1>

                    <small>{title}</small>
                </div>
            </div>
        </div>
    )
}
