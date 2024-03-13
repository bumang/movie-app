import React from 'react';

import Login from '@/features/feature-login/login';
import { LoginLayout } from '@/layouts';

const Page = () => <Login />;

Page.getLayout = (page: React.ReactNode) => <LoginLayout>{page}</LoginLayout>;
export default Page;
