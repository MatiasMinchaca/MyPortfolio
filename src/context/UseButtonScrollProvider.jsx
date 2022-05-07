import React, { createContext, useState } from 'react';

export const ButtonScrollContext = createContext()

const ButtonScrollProvider = ({children}) => {

    const [activate, setActivate] = useState(false)

    window.onscroll = () => {
        if(document.documentElement.scrollTop > 200){
            document.getElementById('buttonScrollTop').style.opacity = 1
            document.getElementById('buttonScrollTop').style.zIndex = 10
        }else{
            document.getElementById('buttonScrollTop').style.opacity = 0
            document.getElementById('buttonScrollTop').style.zIndex = -1
        }
    }
    
    return (
        <ButtonScrollContext.Provider value={{activate, setActivate}}>
            {children}
        </ButtonScrollContext.Provider>
    );
};

export default ButtonScrollProvider;