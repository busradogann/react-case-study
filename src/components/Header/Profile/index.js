import styled from 'styled-components';

import { Avatar, Badge } from 'antd';

import { useLocalStorage } from '../../../hooks';


const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  align-items: center;

  & {
    .avatar {
      display: grid;
      place-items: center;

      .ant-badge-count {
        padding: 0;
      }
    }

    .details {
      display: flex;
      flex-direction: column;

      .name {
        color: #17171a;
        font-size: 14px;
        font-weight: 600;
      }

      .type {
        color: #909099;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
`;

function Profile() {
  const [username, setUserName] = useLocalStorage("username");
  const [accountType, setAccountType] = useLocalStorage("accountType");

  return (
    <ProfileContainer>
      <div className={"avatar"}>
        <Badge count={1} className={"avatar"}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Badge>
      </div>
      <div className={"details"}>
        <span className={"name"}>{username}</span>
        <span className={"type"}>{accountType}</span>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
