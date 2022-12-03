import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Menu as AntdMenu } from 'antd';


const MenuContainer = styled.div`
  ul.ant-menu {
    border-bottom: initial;
  }
`

function Menu() {
    const [items, setItems] = useState([]);
    
    // TODO: useEffect ve fetch kullanarak menu item'lerinin çekilmesi gerekiyor.
  
    useEffect(() => {
      setItems([
        { label: 'item 1', key: 'item-1' },
        { label: 'item 2', key: 'item-2' },
        {
          label: 'item 3',
          key: 'item-3',
          children: [
            { label: 'item 3.1', key: 'submenu-item-3-1' },
            { label: 'item 3.2', key: 'submenu-item-3-2' }
          ],
        },
      ]);
    }, []);
  
    return (
        <MenuContainer>
            <AntdMenu
            mode="horizontal"
            items={items}
            />
        </MenuContainer>
    );
  }

export default Menu;
