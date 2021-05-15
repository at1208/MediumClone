import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function reportWebVitals(metric) {
  console.log(metric)
  switch (metric.name) {
   case 'FCP':
     // handle FCP results
     break
   case 'LCP':
     // handle LCP results
     break
   case 'CLS':
     // handle CLS results
     break
   case 'FID':
     // handle FID results
     break
   case 'TTFB':
     // handle TTFB results
     break
   default:
     break
 }
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
