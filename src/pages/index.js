import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function Home() {
  return (
    Redirect({
      to: 'docs/intro',
      from: '/',
    })
  );
}
