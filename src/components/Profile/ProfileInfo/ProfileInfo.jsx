import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src="https://st.depositphotos.com/1038117/1453/i/600/depositphotos_14534069-stock-photo-perfect-sky-and-water-of.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discr
            </div>
        </div>
    )
}

export default ProfileInfo;