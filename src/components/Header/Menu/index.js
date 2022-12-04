import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Menu as AntdMenu } from 'antd';

import { ReactComponent as AccountsIcon } from "../../../assets/images/menu-accounts.svg";
import { ReactComponent as CampaignsIcon } from "../../../assets/images/menu-campaigns.svg";
import { ReactComponent as CardsIcon } from "../../../assets/images/menu-cards.svg";
import { ReactComponent as OperationsIcon } from "../../../assets/images/menu-operations.svg";

const typeIcons = {
    "accounts": <AccountsIcon />,
    "campaigns": <CampaignsIcon />,
    "cards": <CardsIcon />,
    "operations": <OperationsIcon />
}


const MenuContainer = styled.div`
  ul.ant-menu {
    border-bottom: initial;
  }
  .ant-menu-root > .ant-menu-item, .ant-menu-submenu {
    padding: 0 15px;

    div {
        display: flex;
        align-items: center;
    }

    &:hover {
        background-color: #E4E8F6;
        border-radius: 10px;
    }

    &::after {
        content: none !important;
    }
  }
`

const defaultMenu = [
    {
     "label": "Hesaplar",
     "icon": "accounts",
     "children": [
       {"key": "1-1", "label": "Menu 1"},
       {"key": "1-2", "label": "Menu 2"},
       {"key": "1-3", "label": "Menu 3"},
       {"key": "1-4", "label": "Menu 4"},
       {"key": "1-5", "label": "Menu 5"},
       {"key": "1-6", "label": "Menu 6"}
     ],
     "key": "1",
     "disabled": false
    },
    {
     "label": "Kartlar",
     "icon": "cards",
     "children": [],
     "key": "2",
     "disabled": false
    },
    {
     "label": "İşlemler",
     "icon": "operations",
     "children": [],
     "key": "3",
     "disabled": false
    },
    {
     "label": "Kampanyalar",
     "icon": "campaigns",
     "children": [],
     "key": "4",
     "disabled": false
    },
    {
     "label": "disabled",
     "icon": "disabled",
     "children": [],
     "key": "5",
     "disabled": true
    }
];

const filterMenu = (data) => (
    data.filter(item => (!item.disabled))
        .map(item => ({...item, icon: typeIcons[item.icon]}))
)

function Menu() {
    const [items, setItems] = useState([]);
    
    // TODO: useEffect ve fetch kullanarak menu item'lerinin çekilmesi gerekiyor.
  
    useEffect(() => {
        const data = filterMenu(defaultMenu);

        setItems(data);
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
