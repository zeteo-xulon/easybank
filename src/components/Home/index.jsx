import Generation from '../Generation';
import Reason from '../Reason'
import Articles from '../Articles'

export default function Home() {
  return (
    <main className="main">
      <Generation />
      <Reason />
      <Articles />
    </main>
  );
}