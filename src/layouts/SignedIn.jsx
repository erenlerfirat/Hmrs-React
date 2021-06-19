import React from 'react'
import { Image,Dropdown, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp3.licdn.com/dms/image/C4D35AQFP2k_pFai13w/profile-framedphoto-shrink_400_400/0/1619004585594?e=1624132800&v=beta&t=vBe9QtVLBOvPFcuO7dBe5FnerKdhdK4NGGbycfWNXDc" />
                <Dropdown pointing="top-left" >
                <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>

                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
