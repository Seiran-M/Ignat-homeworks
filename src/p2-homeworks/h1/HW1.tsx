import React from 'react';
import Message from './Message/Message';
import AlternativeMessage from './AlternativeMessage/AlternativeMessage';
import s from './HW1.module.css';


const messageData = {
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFwaTehDtP-aA/profile-displayphoto-shrink_100_100/0/1573385352014?e=1615420800&v=beta&t=MIgwUVltM_S8zNvLZPG0zmLiGYwbnC5UDbVLzPMVOt8',
    name: 'Seiran',
    message: 'Hi, sensei! How are you?',
    time: '09:00',
    avatar2: 'https://img.freepik.com/free-vector/sensei-logo-vector_8124-9.jpg?size=338&ext=jpg',
    name2: 'Ignat',
    message2: 'Hi, samurai! I\'m fine! How did you do your homework?',
    time2: '09:03',
};


function HW1() {
    return (
        <div className={s.messages}>
            homeworks 1
            <hr/>
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}

            {<AlternativeMessage
                avatar={messageData.avatar2}
                name={messageData.name2}
                message={messageData.message2}
                time={messageData.time2}
            />}
            <hr/>
        </div>
    );
}

export default HW1;
