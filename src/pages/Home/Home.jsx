import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Pagination, Input } from "antd";
import { useGetplayersQuery } from "../../services/playersApi";
import { Players } from "../../components";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;


function Home() {
  const [current, setCurrent] = useState(1);
  const { data: players, isFetching } = useGetplayersQuery();

  // change current page
  const onChange = (page) => {
    setCurrent(page);
  };

  // Get current players
  const indexOfLastPlayer = current * 6;
  const indexOfFirstPlayer = indexOfLastPlayer - 6;
  const currentPlayers = players?.slice(indexOfFirstPlayer, indexOfLastPlayer);

  // search by name

  const onSearch = (value) => {
    console.log(players);
    console.log(players.find(({ firstname,lastname }) => firstname.includes(value) || lastname.includes(value)));
  }

  if (isFetching) return "loading ...";

  return (
    <div className="home">
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <Title className="headerTitle"> </Title>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Row>
            <Title level={2}>Your Players</Title>
          </Row>

          <Row>
            <Col xs={24} s={24} lg={24}>
              <Search
                className="searchBar"
                placeholder="Search for a player"
                onSearch={onSearch}
                size="large"
              />
            </Col>
          </Row>

          <Row>
            <Col xs={24} s={24} lg={24}>
              <Players players={currentPlayers} />
            </Col>
            <Col className="paginator" xs={24} s={24} lg={24}>
              <Pagination pageSize={6} current={current} onChange={onChange} total={players?.length} />
            </Col>
          </Row>

        </div>
      </Content>
    </div>
  );
}

export default Home;
