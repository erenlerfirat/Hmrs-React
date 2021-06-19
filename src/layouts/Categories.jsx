import React from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
export default function Categories() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item  name='inbox'>                    
                     Inbox
                 </Menu.Item>

                <Menu.Item name='spam'>                    
                        Spam
                </Menu.Item>

                <Menu.Item  name='updates'> 
                 Updates
                </Menu.Item>

            </Menu>
        </div>
    )
}
