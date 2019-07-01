import React from 'react'

import './avatar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthHelper from '../../utils/AuthHelper';

const auth = new AuthHelper();

export default function Avatar(props) {
    if (props.imgId) {
        return (
            <img src={auth.domain+'/api/img/'+props.imgId}
                alt={props.alt ? props.alt : "Avatar"}
                className="avatar"></img>
        )
    } else {
        return (
            <FontAwesomeIcon icon={['far', 'user']}
                            className="avatar"
                            size="lg"></FontAwesomeIcon>
        )
    }
}
