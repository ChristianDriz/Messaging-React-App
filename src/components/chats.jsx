import UserProfile from '../img/default-img.jpg';

function Messages() {

    return (  
        <div className="p-4">
            <div className="incoming flex ">
                <div className='flex items-end '>
                    <img src={UserProfile} className='h-7 w-7 object-cover rounded-full'/>
                </div>
                <div className='px-2.5 py-0.5 mr-20 '>
                    <p className='grid bg-blue-50 max-w-prose rounded-2xl px-4 py-3 dark:bg-zinc-700'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className="outgoing flex justify-end">
                <div className='px-2.5 py-0.5 ml-20'>
                    <p className='grid bg-indigo-400 text-white max-w-prose rounded-2xl px-4 py-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Messages;