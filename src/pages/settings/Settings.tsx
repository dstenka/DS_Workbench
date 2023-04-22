import { useState, useEffect } from 'react';
import { Tab, initTE } from 'tw-elements';
import SettingContent from './SettingContent';
import TextInput from './../../components/core/forms/TextInput';
import { useAuth } from './../../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { useToast, EToastTypes } from './../../contexts/ToastContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import SettingsMasterData from './tabs/SettingsMasterData';
import SettingsResetPassword from './tabs/SettingsResetPassword';

const Settings = () => {
    const { showTypedToast } = useToast();
    const { currentUser, updatePassword } = useAuth();
    const [name, setName] = useState(currentUser?.displayName ?? '');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

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

    const handleResetPassword = async () => {
        try {
            const result = await updatePassword(newPassword);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="sm:grid sm:grid-flow-col sm:grid-cols-[20%_80%] gab-4 sm:w-auto">
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
                    <div className="my-2 mr-4">
                        <SettingsMasterData handleUpdateUser={handleUpdateUser} name={name} setName={setName} />
                        <SettingsResetPassword
                            handleResetPassword={handleResetPassword}
                            newPassword={newPassword}
                            setNewPassword={setNewPassword}
                            newPasswordConfirm={newPasswordConfirm}
                            setNewPasswordConfirm={setNewPasswordConfirm}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
