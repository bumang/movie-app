// import { InputProps } from "@/components/Input/input.types"
import { Control, Controller, UseControllerProps, useFormContext } from 'react-hook-form';

import { IInput, Input } from '@/components/ui/Input';

type IFormInputProps = IInput & {
  name: string;
  control?: Control;
  rules?: UseControllerProps['rules'];
  isNumeric?: boolean;
};

export const FormInput = ({ name, isNumeric, ...rest }: IFormInputProps) => {
  const methods = useFormContext();
  const {
    formState: { errors },
    clearErrors,
    control,
  } = methods;

  return (
    <Controller
      name={name}
      rules={rest.rules}
      control={control}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <Input
          id={name}
          errors={errors}
          isInvalid={!!errors[name]?.message}
          // errorText={errors[name]?.message as string}
          onChange={(e) => {
            if (isNumeric) {
              onChange(e?.target?.valueAsNumber);
            } else {
              onChange(e);
            }
            if (errors[name]?.type === 'required') {
              clearErrors(name);
            }
          }}
          value={value}
          {...rest}
          {...fieldProps}
        />
      )}
    />
  );
};

export default FormInput;
