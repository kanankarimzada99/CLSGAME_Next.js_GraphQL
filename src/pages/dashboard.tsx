import * as React from 'react'
import Link from 'next/link'
import ContentWrapper from '../components/styled/ContentWrapper'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <ContentWrapper>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </ContentWrapper>
  )
}

export default IndexPage
