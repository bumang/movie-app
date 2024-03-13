import React from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import Image from 'next/image';

interface FormHeaderProps {
  title: React.ReactNode;
  subTitle?: string;
  image?: string;
}
interface FormProps {
  children: React.ReactNode;
}
interface FormFooterProps {
  children: React.ReactNode;
}

interface FormLayoutProps {
  children: React.ReactNode;
  methods: UseFormReturn<FieldValues, any>;
}

export const FormHeader = ({ title, subTitle, image }: FormHeaderProps) => (
  <div className="flex flex-col items-center gap-s16">
    <div className="h-full cursor-pointer">
      <Image
        alt="logo"
        src={image || `${process.env.NEXT_PUBLIC_PATH_PREFIX || ''}/logo.svg`}
        height={100}
        width={100}
      />
    </div>
    <div className="mb-s32 flex flex-col items-center gap-s12">
      {title}

      {subTitle && <div className="text-s16 font-normal text-text-default ">{subTitle}</div>}
    </div>
  </div>
);

export const FormFooter = ({ children, ...props }: FormFooterProps) => (
  <div className="flex items-center" {...props}>
    {children}
  </div>
);

const FormLayout = ({ children, methods }: FormLayoutProps) => (
  <div className="flex content-center items-center">
    <div className="flex w-[35%] min-w-[350px] flex-col gap-s16">
      <FormProvider {...methods}>
        <form>{children}</form>
      </FormProvider>
    </div>
  </div>
);

export const Form = ({ children }: FormProps) => (
  <div className="flex flex-col gap-s16">{children}</div>
);

FormLayout.Header = FormHeader;
FormLayout.Footer = FormFooter;

FormLayout.Form = Form;

export { FormLayout };
