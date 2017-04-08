import Router from 'next/router'
export default ({ url }) => {
  Router.prefetch('/index')
  return (<div>
    <a onClick={() => setTimeout(() => Router.push('/index'), 100)}>
      A route transition will happen after 100ms
    </a>
  </div>)
}

