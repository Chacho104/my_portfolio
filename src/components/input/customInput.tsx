import React from "react";
import { Field, FieldHookConfig, useField } from "formik";

interface ICustomFieldProps {
  label?: string | React.JSX.Element;
}

const CustomInput: React.FC<FieldHookConfig<string> & ICustomFieldProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative w-full">
      <Field
        placeholder=" "
        className={`disabled:opcity-70 } peer w-full rounded-sm border bg-white p-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed ${
          meta.touched && meta.error ? "text-black" : ""
        } ${
          meta.touched && meta.error ? "focus:border-red" : "focus:border-black"
        } ${meta.touched && meta.error ? "border-red" : "border-neutral-300"}`}
        {...field}
        {...props}
      />
      <label
        htmlFor={props.id || props.name}
        className={`text-md absolute left-4 top-5 z-10 origin-[0] -translate-y-3 transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ${
          meta.touched && meta.error ? "text-red" : "text-neutral-500"
        }`}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="mt-2 text-red">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default CustomInput;
