import { useRouter } from 'next/navigation';

const Router = ({route}) => {
    let router = useRouter();
   return router.push(route);
};

export default Router;