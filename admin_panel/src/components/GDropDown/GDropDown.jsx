import { Dropdown } from 'react-bootstrap';

export default function CustomDropDown({ icon, count, items, contextMessage }) {
    return (
        <Dropdown as='li'>
            <Dropdown.Toggle
                as='a'
                className="count-info"
                id="dropdown-basic">
                <i className={`fa ${icon}`}></i>
                <span className="label label-warning">{count || 0}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as='ul' className="dropdown-messages">
                {
                    Array.isArray(items) && items.map((item, index) =>
                        <div key={index}>
                            <li >
                                <div className='dropdown-messages-box'>
                                    <Dropdown.Item href={item.hyperlink} className="d-flex align-items-start">
                                        <img alt="Profile" className="rounded-circle" src={item.image} />
                                        <div style={{ fontSize: 12 }} >
                                            <strong style={{ fontSize: 12 }}>Mike Loreipsum</strong> started following
                                            <strong> Monica Smith</strong>. <br />
                                            <small className="text-muted" style={{ fontSize: 10 }}>
                                                {item.date}
                                            </small>
                                        </div>
                                        <small >{item.time}</small>

                                    </Dropdown.Item>
                                </div>
                            </li>
                            <Dropdown.Divider as='li' />
                        </div>
                    )
                }
                <li>
                    <div className="text-center link-block">
                        <a href="mailbox.html" className="dropdown-item">
                            <i className={`fa ${icon}`}></i>
                            <strong> {contextMessage}</strong>
                        </a>
                    </div>
                </li>
            </Dropdown.Menu>
        </Dropdown>
    );
};
