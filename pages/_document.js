import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="h-full bg-neutral-900 text-neutral-50 font-serif">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
