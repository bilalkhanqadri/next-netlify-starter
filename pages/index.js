import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const iframe =  '<iframe width="100vw" height="100vw" src="https://sway.office.com/s/j773HBlnObjhDPIb/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>'

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      {  /*  <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
         <Footer /> */}
         <div>
        	<Iframe iframe={iframe} />
         </div>
      </main>


    </div>
  )
}
