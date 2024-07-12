import {useRouteError} from 'react-router-dom';

export default function NoPage(){
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>There is an error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
