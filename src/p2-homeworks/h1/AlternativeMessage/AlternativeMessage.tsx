import React from 'react';
import s from './AlternativeMessage.module.css';

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: messageData) {
    return (
        <div className={s.wrap}>
            <div className={s.item}>
                <div className={s.message}>
                    <div>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.text}>{props.message}</div>
                    </div>
                    <span className={s.time}>{props.time}</span>
                </div>
                <img className={s.ava} src={props.avatar} alt=""/>
            </div>
        </div>
    );
};

export default AlternativeMessage;
