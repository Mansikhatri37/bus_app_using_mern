
import { Nav, Navbar } from "react-bootstrap";
import CustomDropDown from "../GDropDown/GDropDown";
import { messages } from "../../faker/messages";
import { notifications } from "../../faker/notifications";

export default function TopBar() {
    return (
        <div className='row border-bottom '>
            <Navbar className="navbar navbar-static-top white-bg" style={{ justifyContent: 'space-between', alignItems: 'center' }}>

                <div className="navbar-header">
                    <Nav.Link className="navbar-minimalize minimalize-style-2 btn btn-primary" href="#"><i className="fa fa-bars" />
                    </Nav.Link>
                    <Navbar.Brand href="#home" >Ghumantoo</Navbar.Brand>
                </div>


                <Nav as='ul' className='nav navbar-top-links navbar-right' style={{ alignItems: 'center', marginRight: 12 }}>
                    <Nav.Link as='li'>
                        <span className=" m-r-sm text-muted welcome-message">Welcome Admin</span>
                    </Nav.Link>
                    <CustomDropDown items={messages} icon='fa-envelope' count={messages.length} contextMessage='Read All Messages' />
                    <CustomDropDown items={notifications} icon='fa-bell' count={notifications.length} contextMessage='View All Alerts' />
                    <Nav.Link as='li' href="/" ><i className="fa fa-sign-out" /> Log out</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    )
}
