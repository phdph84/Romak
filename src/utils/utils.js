import {toast} from 'react-toastify'
export  const displaySuccessToastify =()=>{
    toast.success("کاربر با موفقیت وارد سیستم شد.")
}

export  const displayFailureToastify =()=>{
    toast.error("نام کاربری یا کلمه عبور صحیح نمی باشد.")
}

