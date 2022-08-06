import React from 'react';
import { Typography, Avatar, Card } from 'antd';
import moment from 'moment';
import '@brainhubeu/react-carousel/lib/style.css';

const { Meta } = Card;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Text, Title } = Typography;

function Players({ players }) {
    return (
        <div className="playerContainer">
            {players.map((item, i) => (
                <Card
                    style={{
                        marginTop: '20px',
                        width: 300,
                    }}
                    cover={
                        <img
                            className='playerImage'
                            src={item?.pictureURl || demoImage} alt=""
                        />
                    }
                >
                    <Meta
                        title={item?.firstname + ' ' + item?.lastname}
                        description={ 'GOALS :'+item?.goal + ' SALARY :' + item?.salary + item?.devise}
                    />
                </Card>
            ))}
        </div>
    );
}

export default Players;