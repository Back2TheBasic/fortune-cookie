import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from '@/store/provider';
import Loading from '@/components/loading/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '포춘쿠키',
  description: '2024 포춘쿠키 운세확인',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <script
          defer
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
          integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div id="app-root">
          <Provider>
            <div id="modal-root" />
            <Loading />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
