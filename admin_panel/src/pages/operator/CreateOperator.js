import GInput from "../../components/input/GInput"

export default function CreateOperator() {
  return (
    <div className="wrapper wrapper-content">
      <div className="row">
        <div className="ibox ">
          <div className="ibox-title">
            <h5>Create Operator</h5>
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
              <div className="row">
                <div className="col-lg-4">
                  <GInput
                    label='first name'
                    type='text'
                    placeholder='John Doe'
                    helperText="Enter first name and last name without any special character"
                  />
                </div>
                <div className="col-lg-4">
                  <GInput
                    label='middle name'
                    type='text'
                    placeholder='John Doe'
                    helperText="Enter first name and last name without any special character"
                  />
                </div>
                <div className="col-lg-4">
                  <GInput
                    label='last name'
                    type='text'
                    placeholder='John Doe'
                    helperText="Enter first name and last name without any special character"
                  />
                </div>
              </div>
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

              <div className="row">
                <div className="col-lg-6">
                  <GInput
                    label='Address line 1'
                    type='text'
                    placeholder='Flat/apartment/house number' />
                </div>
                <div className="col-lg-6">
                  <GInput
                    label='Address line 2'
                    type='text'
                    placeholder='landmark/street/road' />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <GInput
                    label='City'
                    type='text'
                    placeholder='Delhi' />
                </div>
                <div className="col-lg-4">
                  <GInput
                    label='State'
                    type='text'
                    placeholder='Delhi' />
                </div>
                <div className="col-lg-4">
                  <GInput
                    label='postal code'
                    type='text'
                    placeholder='Delhi' />
                </div>
              </div>





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
