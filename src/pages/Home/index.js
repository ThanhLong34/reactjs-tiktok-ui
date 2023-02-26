import { routes } from '@/configs';
import { Link } from 'react-router-dom';

function Home() {
   return (
      <h2>
         <Link to={'/profile/1'}>Profile 1</Link>
         <Link to={'/profile/2'}>Profile 2</Link>
         <Link to={routes.profile}>Profile 3</Link>
      </h2>
   );
}

export default Home;
