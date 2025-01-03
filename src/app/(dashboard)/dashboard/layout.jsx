import Sidebar from '@/components/shared/Sidebar';

const dashboardLayout = ({ children }) => {
  return (
    <div className='relative min-h-screen lg:flex bg-green-500 bg-opacity-40 font-raleway'>
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 lg:ml-64 bg-green-100 text-black'>
        <div className='p-5'>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
