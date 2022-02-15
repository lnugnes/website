import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

                    <meta name="description" content="Meu Guru Financeiro Website" />
                    <meta property="op:type" content="website" />
                    <meta property="og:site_name" content="Meu Guru Financeiro" />
                    <meta property="og:title" content="Meu Guru Financeiro" />
                    <meta property="og:image" content="favicon.ico" />
                    <meta property="og:description" content="Meu Guru Financeiro Website" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}