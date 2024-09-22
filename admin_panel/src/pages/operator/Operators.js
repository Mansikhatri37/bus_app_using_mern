import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { operatorColumns } from "../../utils/operatorColumn"
import GDataTable from "../../components/datatable/GDataTable";

export default function Operator() {
  const { buses } = useLoaderData();
  const [totalOperator, setTotalOperator] = useState(0);
  useEffect(() => {
    console.log(buses);
    setTotalOperator(buses ? buses.length : 0);
  }, [buses])

  return (
    <div className="wrapper wrapper-content">
      <div className="row">
        {/* Total Number of users */}
        <div className="col-lg-2">
          <div className="ibox">
            <div className="ibox-title">
              <span className="label label-success float-right">
                Upto Now
              </span>
            </div>
            <div className="ibox-content">
              <h1 className="no-margins">{totalOperator}</h1>

              <small>Total Operator</small>
            </div>
          </div>
        </div>
        {/* Active vs Inactive Users */}
        <div className="col-lg-2">
          <div className="ibox">
            <div className="ibox-title">
              <span className="label label-success float-right">
                Upto Now
              </span>
            </div>
            <div className="ibox-content">
              <h1 className="no-margins">{totalOperator}</h1>

              <small>Total Operator</small>
            </div>
          </div>
        </div>
        {/* Some revenue graph */}
        <div className="col-lg-4">
          <div className="ibox">
            <div className="ibox-title">
              <span className="label label-success float-right">
                Upto Now
              </span>
            </div>
            <div className="ibox-content">
              <h1 className="no-margins">{totalOperator}</h1>

              <small>Total Operator</small>
            </div>
          </div>
        </div>
        {/* some revenue graph */}
        <div className="col-lg-4">
          <div className="ibox">
            <div className="ibox-title">
              <span className="label label-success float-right">
                Upto Now
              </span>
            </div>
            <div className="ibox-content">
              <h1 className="no-margins">{totalOperator}</h1>

              <small>Total Operator</small>
            </div>
          </div>
        </div>
      </div>
      <div className="ibox">
        <div className="ibox-title">
          <h5>Operator</h5>
          <div className="ibox-tools">
            <a className="close-link" href="create-operator">
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
        <div className="ibox-content">
          <GDataTable data={buses} columns={operatorColumns} />
        </div>
      </div>
    </div>
  );
}