import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'

function Preact (props) {
  return (
    <Layout>
    <div>
      <h1>About</h1>
    </div>

    </Layout>
  )
}

Preact.getInitialProps = async (context) => {
  const { id } = context.query;
  console.log(context.query)

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const json = await res.json() // better use it inside try .. catch
  // console.log(json)
  return { laleh: json }
}

export default Preact
