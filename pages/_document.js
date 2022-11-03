import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const _document = () => {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default _document