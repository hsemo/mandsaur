import {useRouteError} from 'react-router-dom';

export default function NoPage(){
  const error:any = useRouteError();
  console.log(error);

  return (
    <div
      className="w-screen h-screen flex flex-col p-10 justify-start items-center bg-gray-900"
    >
      <h1 className='text-3xl'>There is an error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
