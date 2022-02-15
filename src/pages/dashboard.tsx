import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '@components/header';
import { SideBar } from '@components/sidebar';

const Dashboard: NextPage = () => {
  return (
    <>
      <Header/>
      <SideBar/>
    </>
  );
};

export default Dashboard;
