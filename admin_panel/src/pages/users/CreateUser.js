import React from 'react'
import GInput from '../../components/input/GInput'

export default function CreateUser() {
    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5>Create User</h5>
                        <div className="ibox-tools">
                            <a className="collapse-link">
                                <i className="fa fa-chevron-up"></i>
                            </a>
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-wrench"></i>
                            </a>
                            <a className="close-link">
                                <i className="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ibox-content">
                        <form role="form">
                            <GInput
                                label='user name'
                                type='text'
                                placeholder='John Doe'
                                helperText="Enter first name and last name without any special character"
                            />
                            <GInput
                                label='email'
                                type='email'
                                placeholder='abc@gmail.com' />
                            <GInput
                                label='contact number'
                                type='numeric'
                                placeholder='+911234567890' />
                            <GInput
                                label='password'
                                type='password'
                                placeholder='John Doe'
                                helperText="must use at least 10 characters. Atleast One smallcase, one capital case, one special character"
                            />
                            <GInput label='Confirm password' type='password' placeholder='John Doe' />


                            <div className="hr-line-dashed"></div>
                            <div className="form-group row">
                                <div className="col-sm-4 col-sm-offset-2">
                                    <button className="btn btn-white btn-sm" type="reset">Cancel</button>
                                    <button className="btn btn-primary btn-sm" type="submit">Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
