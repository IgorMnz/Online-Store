import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
        navigate(SHOP_ROUTE)
    }

    return (
        <Navbar bg="warning" variant="warning">
            <Container>
                <NavLink className="d-flex row align-items-center" style={{color: 'black'}}
                         to={"/"}>DeviceShop</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'black'}}>
                        <Button
                            variant={"outline-dark"}
                            className="mr-2"
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            Корзина
                        </Button>
                        {user.isAdmin ?
                            <Button
                                variant={"outline-dark"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            variant={"outline-dark"}
                            onClick={() => logOut()}
                            className="ms-2">Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'black'}}>
                        <Button variant={"outline-black"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
        ;
});

export default NavBar;