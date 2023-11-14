import Sidebar from "../components/sidebar";
import Main from "../components/mainbox";
import Swal from 'sweetalert2/dist/sweetalert2.js';

function Messaging() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
    })

    return ( 
        <div className="max-h-screen h-screen w-full flex">
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default Messaging;