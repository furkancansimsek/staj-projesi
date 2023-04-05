import React, { useState } from 'react'
import mapPng from '../../assets/map.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import ResidentDescription from '../../components/ResidentDescription';
import resident from '../../utils/data/resident.json'
import AppSkeleton from '../../components/AppSkeleton';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const MapPage = () => {

    const [residents, setResidents] = useState([]);
    const [skeleton, setSkeleton] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const loginClick = () => {
        navigate("/login");
    }

    const logoutClick = () => {
        localStorage.removeItem("token");
        auth.setUser(null);
        auth.setToken(null);
        auth.setIsLogin(false);
    }

    const mapClick = async (index) => {
        setSkeleton(true);
        await sleep(500);
        setResidents(resident[index])
        setSkeleton(false);
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[25%] h-[500px] md:h-screen bg-[rgb(18,78,207)] flex items-center flex-col py-5 transition-all">
                {auth.isLogin &&
                    <div className="flex gap-1 text-white justify-self-start pb-5">
                        <span className='font-bold'>Kullanıcı:</span>
                        <span>{auth?.user?.name}</span>
                        <span>{auth?.user?.lastName}</span>
                    </div>
                }
                <AppSkeleton loading={skeleton}>
                    <ResidentDescription data={residents} />
                </AppSkeleton>
                {!auth.isLogin && <button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition-all my-5 mt-auto' onClick={loginClick} >Giriş Yap</button>}
                {auth.isLogin && <button className='bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500 transition-all my-5 mt-auto' onClick={logoutClick} >Çıkış Yap</button>}
            </div>
            <div className="w-full md:w-[75%] h-[500px] md:h-screen bg-[#A5D7E8] relative">
                <img src={mapPng} alt="MAP" className='block absolute w-full h-full' />
                <i className={`text-red-600 text-3xl fa-solid fa-location-dot absolute top-[47%] left-[25%] translate-x-[-50%] translate-y-[-50%] cursor-pointer`} onClick={async () => { await mapClick(0) }}></i>
                <i className={`text-red-600 text-3xl fa-solid fa-location-dot absolute top-[40%] left-[45%] translate-x-[-50%] translate-y-[-50%] cursor-pointer`} onClick={async () => { await mapClick(1) }}></i>
                <i className={`text-red-600 text-3xl fa-solid fa-location-dot absolute top-[37%] left-[54%] translate-x-[-50%] translate-y-[-50%] cursor-pointer`} onClick={async () => { await mapClick(2) }}></i>
            </div>
        </div>
    )
}

export default MapPage