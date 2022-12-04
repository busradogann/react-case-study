import { Avatar, List as AntdList } from 'antd';

import styled from 'styled-components';

import { ReactComponent as FoodIcon } from '../../assets/images/food.svg';
import { ReactComponent as MoneyIcon } from '../../assets/images/money.svg';
import { ReactComponent as GoldIcon } from '../../assets/images/gold.svg';

import moment from 'moment';
import 'moment/locale/tr';

moment().locale('tr');

const randomDate = () => moment().subtract(Math.floor(Math.random() * 10), "minutes")

const typeColors = {
    "food": "#8066cc",
    "money": "#26bf66",
    "gold": "#ffb44d"
}

const typeIcons = {
    "food": <FoodIcon/>,
    "money": <MoneyIcon/>,
    "gold": <GoldIcon/>
}

const data = [
    {
        id: 1,
        type: "food",
        title: "Burger's Lab",
        account: "Aile Hesabım (Yasemin Pınar)",
        amount: "₺-200",
        createdAt: randomDate()
    },
    {
        id: 2,
        type: "money",
        title: "Gelen Transfer",
        account: "Dolar Hesabım (Erman Karakaya)",
        amount: "$140.00",
        createdAt: randomDate()
    },
    {
        id: 3,
        type: "gold",
        title: "Para Yükle",
        account: "Altın Hesabım",
        amount: "2.00 gr",
        createdAt: randomDate()
    },
]

const TransactionsContainer = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 0 24px 24px;

    .ant-list-pagination {
        text-align: center;

        .ant-pagination-prev, .ant-pagination-next {
            display: none;
        }

        .ant-pagination-item {
            border: none;
            border-radius: 12px;
            background-color: #f5f5fa;

            a {
                color: #909099;
                font-size: 16px;
                font-weight: 500;
            }
        }

        .ant-pagination-item-active {
            background-color: #155ed4;

            a {
                color: #fff;
            }
        }
    }
`
const List = styled(AntdList)``
const ListItem = styled(AntdList.Item)`
    padding: 24px 0;
`
const ListItemMeta = styled(AntdList.Item.Meta)`
    .ant-list-item-meta-content {
        width: auto;
    }

    .ant-list-item-meta-title {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.4px;
        color: ${props => props.deposit === "1" ? '#26bf66' : '#17171a'};
        ${props => props.amount === "1" && 'text-align: right; letter-spacing: initial;'}
    }

    .ant-list-item-meta-description {
        font-size: 12px;
        // letter-spacing: normal;
        color: #909099;
    }
`
const ListItemMetaAvatar = styled(Avatar)`
    display: flex;
    align-items: center;
    justify-content: center;
`

function Transactions(props) {
    return (
    <TransactionsContainer>
        <List
          dataSource={data}
          pagination={{
            pageSize: 2,
            total: data.length,
            itemRender: (_, type, originalElement) => ((type === "prev" || type === "next") ? null : originalElement)
          }}
          renderItem={(item) => (
            <ListItem key={item.id}>
              <ListItemMeta
                avatar={<ListItemMetaAvatar size={40} style={{ backgroundColor: typeColors[item.type] }} icon={typeIcons[item.type]} />}
                title={item.title}
                description={item.account}
              />
              <div>
                <ListItemMeta
                  title={item.amount}
                  description={item.createdAt.fromNow()}
                  amount={"1"}
                  deposit={item.type === "money" ? "1" : "0"}
              />
              </div>
            </ListItem>
          )}
        />
    </TransactionsContainer>
    );  
}


export default Transactions;