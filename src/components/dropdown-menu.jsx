import { Menu, Transition, Switch } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

let mode = localStorage.getItem('dark') === 'true';

    if (mode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

function Dropdown() {
    const [enabled, setEnabled] = useState(false);
    const toggleDarkmode = (e) => {
        setEnabled(e);

        mode = !mode;

        if (mode){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('dark', mode);
    }

    return ( 
        <Menu as="div" className={'relative dark:text-white'}>
            <Menu.Button className={'w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-blue-50 dark:hover:bg-zinc-700 '}>
                <ion-icon name="menu-outline"></ion-icon>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={'absolute top-11 border w-60 capitalize p-1 bg-white opacity-90 rounded-lg shadow-md font-semibold dark:bg-zinc-800 dark:border-zinc-600'}>
                    <Menu.Item>
                        <a className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="person-outline"></ion-icon>
                            <p className="ml-3">Profile</p>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="settings-outline"></ion-icon>
                            <p className="ml-3">Settings</p>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="cloudy-night-outline"></ion-icon>
                            <div className='w-full flex items-center justify-between'>
                                <p className="ml-3">Night Mode</p>
                                <Switch
                                    checked={enabled}
                                    onChange={toggleDarkmode}
                                    className={`${mode ? 'bg-indigo-400' : 'bg-gray-200'} 
                                    relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                <span 
                                    className={`${mode ? 'translate-x-6' : 'translate-x-1'} 
                                    inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                                </Switch>
                            </div>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="bug-outline"></ion-icon>
                            <p className="ml-3">Report Bug</p>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="help-circle-outline"></ion-icon>
                            <p className="ml-3">Help</p>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/react-messaging-app/asd/sign-in" className='flex items-center hover:bg-blue-50 px-4 py-1.5 rounded-md dark:hover:bg-zinc-700'>
                            <ion-icon name="log-out-outline"></ion-icon>
                            <p className="ml-3">Log out</p>
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default Dropdown;