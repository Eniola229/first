import React from 'react'
import {Menu, Container, Image, Button} from "semantic-ui-react"
import { useNavigate, Link } from 'react-router-dom'


function NavBar() {
    const navigate = useNavigate();

  return (
    
    <Menu inverted borderless style={{padding:"0.4rem", marginButtom: "20px"}} attached>
        <Container>
        <div>
            <h2>Crud With Upload Image</h2>
        </div>
        <div>
           <div position='right'>
                <Button size='mini' primary onClick={() => navigate("/add")}>Add User</Button>
           </div>
        </div>
        </Container>
    </Menu>

  )
}

export default NavBar