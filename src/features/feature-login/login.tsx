import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { asyncToast, FormInput } from '@/components';
import Button from '@/components/ui/Button';

import { useLoginMutation } from './api/login';
import { FormLayout } from './components/OnboardForm';
import { loginSchema } from './validations/loginSchema';

const Login = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });
  const login = useLoginMutation();

  const onFormSubmit = () => {
    const values = methods.getValues();
    asyncToast({
      id: 'login',
      promise: login.mutateAsync({ ...values }),
      msgs: {
        loading: 'Loggin in...',
        success: 'Logged in Successfully!',
      },
      onError: (error) => {
        const errors = (error as any) ?? {};
        Object.keys(errors).forEach((err) => {
          methods.setError(
            err,
            {
              message: errors[err],
            },
            {
              shouldFocus: true,
            }
          );
        });
      },
      onSuccess: () => {
        router.push('/');
      },
    });
  };
  return (
    <div className="flex justify-center">
      <FormLayout methods={methods}>
        <FormLayout.Header
          title={
            <div className="flex flex-col items-center gap-s2">
              <div className="text-s28 font-light text-text-preLoader">Log in to</div>
              <div className="text-s28 font-light text-text-preLoader">Daraz From Daraz</div>
            </div>
          }
          subTitle="Please login with your credentials"
        />
        <FormLayout.Form>
          <FormInput
            name="username"
            type="text"
            label="Username"
            placeholder="Enter Username"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            required
          />

          <Button
            isloading={login.isPending}
            isDisabled={login.isPending}
            type="submit"
            className="h-[50px]"
            onClick={methods.handleSubmit(onFormSubmit)}
          >
            Login
          </Button>
        </FormLayout.Form>
        <FormLayout.Footer>
          <div className="mt-s16 flex w-full justify-center gap-s4">
            <div>Not Signed In?</div>
            <Link
              className="cursor-pointer text-secondary-blueHover hover:underline hover:underline-offset-4"
              href="/auth/sign-in"
            >
              <div>Create New Account</div>
            </Link>
          </div>
        </FormLayout.Footer>
      </FormLayout>
    </div>
  );
};

export default Login;
