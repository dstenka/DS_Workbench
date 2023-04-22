import SettingContent from '../SettingContent';
import TextInput from '../../../components/core/forms/TextInput';

export interface SettingsMasterDataProps {
    handleUpdateUser(): void;
    name: string;
    setName(name: string): void;
}

export default function SettingsMasterData(props: SettingsMasterDataProps) {
    return (
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
                        value={props.name}
                        setValue={(name) => props.setName(name)}
                    />
                </SettingContent>
            </div>

            <div className="flex justify-end">
                <button type="button" className="btn btn-green" onClick={props.handleUpdateUser}>
                    Save
                </button>
            </div>
        </div>
    );
}
