export interface TextInputProps {
    label: string;
    type: string;
    id: string;
    value: string;
    setValue: (value: string) => void;
}

export default function TextInput(props: TextInputProps) {
    return (
        <div className="relative">
            <div className="relative">
                <input
                    type={props.type}
                    id={props.id}
                    className="text-input peer"
                    placeholder=" "
                    onChange={(e) => props.setValue(e.target.value)}
                    value={props.value}
                />
                <label htmlFor={props.id} className="text-input-label">
                    {props.label}
                </label>
            </div>
        </div>
    );
}
