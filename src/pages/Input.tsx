import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute } from "react"

type InputProp = {
    label: string,
    name: string
    type: HTMLInputTypeAttribute,
    value: string,
    change:  ChangeEventHandler <HTMLInputElement>| null
}

export default function Input(input: InputProp ){
    const { label, name, type, value, change } = input;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (change) {
            change(event);
        }
    };
    return <>
              <label htmlFor={name} className="border border-slate-300 w-full h-12 p-2 rounded-2xl relative">
                            <span className="absolute -top-4 left-4 px-2 h-max rounded-2xl bg-white">{label} <span className="text-red-500">*</span> :</span>
                            <input type={type}className="w-full p-2 outline-none h-9" name={name} onChange={handleChange} />
                        </label>
    </>
}