import React, { useState, useEffect } from 'react';
import { Tab, initTE } from 'tw-elements';
import SettingContent from './SettingContent';
import TextInput from './../../components/core/forms/TextInput';
import { useAuth } from './../../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { useToast, EToastTypes } from './../../contexts/ToastContext';

const Settings = () => {
    const { showTypedToast } = useToast();
    const { currentUser } = useAuth();
    const [name, setName] = useState(currentUser?.displayName ?? '');

    useEffect(() => {
        initTE({ Tab });
    }, []);

    const handleUpdateUser = async () => {
        try {
            await updateProfile(currentUser, {
                displayName: name,
            }).then(() => {
                showTypedToast(EToastTypes.SUCCESS, 'Profil aktualisiert');
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="sm:grid grid-flow-col sm:grid-cols-[20%_80%] gab-4 w-max sm:w-auto">
                <div className="col-span-1">
                    <ul className="mr-4 flex list-none flex-col flex-wrap pl-0" data-te-nav-ref>
                        <li className="flex-grow text-center">
                            <a
                                href="#my-profile"
                                className="my-2 px-7 pb-3.5 pt-4
                                block border-x-0 border-b-2 border-t-0 border-transparent
                                text-xs font-medium uppercase leading-tight
                                hover:rounded-xl rounded-3xl data-[te-nav-active]:rounded-xl
                                transition-all duration-300 ease-linear
                                cursor-pointer shadow-lg
                                bg-gray-400 hover:bg-green-600 data-[te-nav-active]:bg-green-600 dark:bg-gray-800 dark:data-[te-nav-active]:bg-green-600
                                text-green-500 hover:text-white data-[te-nav-active]:text-white"
                                data-te-toggle="pill"
                                data-te-target="#my-profile"
                                data-te-nav-active
                                aria-selected="true"
                            >
                                Mein Profil
                            </a>
                        </li>
                        <li role="presentation" className="flex-grow text-center">
                            <a
                                href="#tabs-profile03"
                                className="my-2 px-7 pb-3.5 pt-4
                                block border-x-0 border-b-2 border-t-0 border-transparent
                                text-xs font-medium uppercase leading-tight
                                hover:rounded-xl rounded-3xl data-[te-nav-active]:rounded-xl
                                transition-all duration-300 ease-linear
                                cursor-pointer shadow-lg
                                bg-gray-400 hover:bg-green-600 data-[te-nav-active]:bg-green-600 dark:bg-gray-800 dark:data-[te-nav-active]:bg-green-600
                                text-green-500 hover:text-white data-[te-nav-active]:text-white"
                                data-te-toggle="pill"
                                data-te-target="#reset-password"
                                aria-selected="false"
                            >
                                Passwort ändern
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-10">
                    <div className="my-2">
                        <div
                            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="my-profile"
                            data-te-tab-active
                        >
                            <div className="grid grid-flow-col gap-4">
                                <SettingContent>
                                    <TextInput
                                        label="Name"
                                        id="settings_myprofile_name"
                                        type="text"
                                        value={name}
                                        setValue={(name) => setName(name)}
                                    />
                                </SettingContent>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="btn btn-green right-0" onClick={handleUpdateUser}>
                                    Save
                                </button>
                            </div>
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="reset-password"
                            aria-labelledby="tabs-profile-tab03"
                        >
                            Passwort ändern
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
