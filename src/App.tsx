"use client";

import { useForm, Controller } from "react-hook-form"

interface IFormInputs {
    TextField: string
    CheckboxField: boolean
}

interface FormProps {
    state: IFormInputs;
}

export function Form(props: FormProps) {
    const { state } = props;

    const { handleSubmit, control, reset } = useForm<IFormInputs>({
        defaultValues: state,
        values: state,
    })

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <div>
                <Controller
                    name="TextField"
                    control={control}
                    render={({ field }) => <input type="text" {...field} />}
                />
            </div>
            <div>
                <Controller
                    name="CheckboxField"
                    control={control}
                    render={({ field }) => <input type="checkbox" {...field} value="on" checked={field.value} />}
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}

export default function App() {
    const state: IFormInputs = {
        CheckboxField: false,
        TextField: "",
    };

    return <>
        <Form state={state} />
    </>;
}
