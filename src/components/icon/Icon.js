import React,{useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link, useNavigate} from 'react-router-dom'


const Icon = () => {
    const navigate=useNavigate();
    const Name=localStorage.getItem("name");
    const Email=localStorage.getItem("email");

    function logout(){
    localStorage.clear();
    navigate("/login");
    }
    const [anchorEl, setAnchorEl] =useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
                <Badge id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                >
                    <PersonIcon sx={{ color: "white" }} fontSize="large" />
                </Badge>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} className="text-center">{Name}</MenuItem>
                <MenuItem onClick={handleClose} className="text-center">{Email}</MenuItem>

                <MenuItem onClick={handleClose}><button className='btn'> {
                 (Name)?
                <Nav.Link><button className='btn bg-primary text-light' onClick={logout}>Logout</button></Nav.Link>
                :
                <>
               <div className="mb-2"><Link to="/login"><button className="btn nik-btn btn-color text-light">login</button></Link></div>
              <div><Link  to="/register"><button className="btn btn-color text-light">Register</button></Link></div></>
          }</button>
          </MenuItem>
            </Menu>
        </>
    );
};

export default Icon;