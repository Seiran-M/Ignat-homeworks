import React from 'react';
import s from './Message.module.css';

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div className={s.item}>
            <img className={s.ava} src={props.avatar} alt=""/>
            <div className={s.message}>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                </div>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    );
};

export default Message;
