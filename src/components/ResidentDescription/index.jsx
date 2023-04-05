import React from 'react';
import ResidentItem from './ResidentItem';
import { useAuth } from '../../providers/AuthProvider';

const ResidentDescription = ({ data }) => {

    const auth = useAuth();

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <span>{data?.address}</span>
                {data?.residents?.length && <h1 className='mb-5'>Adresinde Yaşayanlar</h1>}
                {auth.isLogin && !!data?.residents && data?.residents?.length && data?.residents?.map((item, index) => (
                    <ResidentItem person={item} key={index} />
                ))}
            </div>
        </>
    )
}

export default ResidentDescription;