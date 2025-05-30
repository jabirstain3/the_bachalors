import { Bounce, ToastContainer } from "react-toastify";

const ToastProvider = ({ children }) => (
    <>
        {children}
        <ToastContainer position="bottom-right" autoClose={3000} limit={4} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce} />
    </>
);

export default ToastProvider;