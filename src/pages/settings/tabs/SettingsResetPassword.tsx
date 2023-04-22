import SettingContent from '../SettingContent';
import TextInput from '../../../components/core/forms/TextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface SettingsResetPasswordProps {
    handleResetPassword(): void;
    newPassword: string;
    setNewPassword(name: string): void;
    newPasswordConfirm: string;
    setNewPasswordConfirm(name: string): void;
}

export default function SettingsResetPassword(props: SettingsResetPasswordProps) {
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            newPasswordConfirm: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string(),
            newPasswordConfirm: Yup.string(),
        }),
        onSubmit: (values) => {
            props.setNewPassword(values.newPassword);
            props.setNewPasswordConfirm(values.newPasswordConfirm);
            props.handleResetPassword();
        },
    });

    return (
        <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="reset-password"
            aria-labelledby="tabs-profile-tab03"
        >
            <div className="grid grid-flow-col gap-4">
                <div className="relative">
                    <input
                        type="password"
                        id="settings_new_password"
                        className="text-input peer"
                        placeholder=" "
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="settings_new_password" className="text-input-label">
                        New Password
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="password"
                        id="settings_new_password_confirm"
                        className="text-input peer"
                        placeholder=" "
                        value={formik.values.newPasswordConfirm}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="settings_new_password_confirm" className="text-input-label">
                        New Password Confirm
                    </label>
                </div>
            </div>

            <div className="flex justify-end">
                <button type="button" className="btn btn-green" onClick={props.handleResetPassword}>
                    Reset Password
                </button>
            </div>
        </div>
    );
}
