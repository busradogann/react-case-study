import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';

import styled from 'styled-components';

import { Menu as AntdMenu } from 'antd';

import { API_HOST } from "../../../config";

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

const filterMenu = (data) => (
    data.filter(item => (!item.disabled))
        .map(item => ({...item, icon: typeIcons[item.icon]}))
)

function Menu() {
    const [items, setItems] = useState([]);
    const { get, response } = useFetch(API_HOST)

    useEffect(() => { loadMenu() }, [])

    async function loadMenu() {
        const menu = await get('/navigation');
        if (response.ok) {
            setItems(filterMenu(menu))
        }
    }

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
