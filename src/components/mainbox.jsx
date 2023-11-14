import { useState, useRef, useEffect } from "react";
import Topnav from "./topnav";
import Messages from "./chats";

function Main() {

    const [textInput, setTextInput] = useState('');
    const txtareaHeight = useRef(null);
    const divHeight = useRef(null);
    const [mainDivHeight, setmainDivHeight] = useState('calc(100% - 130px)');
    const scrollDownRef = useRef(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setTextInput(value);

        const txtheight = txtareaHeight.current;
        const div = divHeight.current; /* 62px is the default height of the div */

        txtheight.style.height = '38px'; /* default height */
        const txtareaScrollHeight = txtheight.scrollHeight;
        txtheight.style.height = `${txtareaScrollHeight}px`;
        div.style.height = `${txtareaScrollHeight + 24}px` /* 24 = 62 - 38*/

        const newMainDivHeight = `calc(100% - ${txtareaScrollHeight + 92}px)`;
        setmainDivHeight(newMainDivHeight);

    }

    const scrollDown = () => {
        scrollDownRef.current.scrollTop = scrollDownRef.current.scrollHeight;
    }

    useEffect(() => {
        scrollDown();
    });

    const list = 15;
    const messages = [];

    for (let i = 0; i < list; i++){
        messages.push(
            <Messages key={i}/>
        )
    }

    return (  
        <div className="h-full w-[calc(100%-24rem)] dark:bg-zinc-800 dark:text-white">
            <Topnav/>
            <div 
                className="h-[calc(100%-130px)] min-h-[calc(100%-244px)] overflow-auto" 
                style={{height: mainDivHeight}}
                ref={scrollDownRef}>
                {messages}
            </div>
            <div className="h-[62px] max-h-44 flex items-end justify-between px-2 relative" ref={divHeight}>
                <div className="h-[62px] flex text-xl gap-4 px-2">
                    <a className={`flex items-center duration-100 ${textInput ? 'scale-50 delay-150' : 'scale-100 delay-0'}`}>
                        <ion-icon name="image-outline"></ion-icon>
                    </a>
                    <a className={`flex items-center duration-100 ${textInput ? 'scale-50 delay-75' : 'scale-100 delay-75'}`}>
                        <ion-icon name="image-outline"></ion-icon>
                    </a>
                    <a className={`flex items-center duration-100 ${textInput ? 'scale-50 delay-0' : 'scale-100 delay-150'}`}>
                        <ion-icon name="image-outline"></ion-icon>
                    </a>
                </div>
                <div className={`h-full flex items-end justify-end px-2 py-3 absolute right-[41px] duration-300 ${textInput ? 'w-[calc(100%-49px)]' : 'w-[calc(100%-158px)]'}`}>
                    <textarea 
                        ref={txtareaHeight}
                        placeholder="Aa"
                        value={textInput}
                        onChange={handleChange}
                        className="h-[38px] max-h-[152px] leading-[22px] rounded-3xl bg-zinc-200 px-4 py-2 resize-none outline-none w-full dark:bg-zinc-700"
                    ></textarea>
                </div>
                <div className="px-2 h-[62px] flex items-center">
                    <ion-icon name="send-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

export default Main;