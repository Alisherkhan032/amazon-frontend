import { Link, useNavigate } from "react-router-dom";
import NavLayout from "../Navlayout/Navlayout";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentUser } from '../../slices/authSlice';

function Profile() {
    const username = useSelector((state) => state.auth.currentUser?.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeCurrentUser());
        navigate('/login');
    };

    return (
        <div className="max-w-4xl mx-auto my-10">
            <div className="bg-white shadow-md border rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Account</h1>
                <div className="mb-6">
                    <h2 className="text-lg text-gray-700 mb-2">Welcome, <span className="font-semibold">{username}</span>!</h2>
                    <p className="text-gray-600">Manage your profile and account settings here.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-800">Your Orders</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            View your order history and manage your returns.
                        </p>
                        <Link
                            to="/orders"
                            className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                        >
                            Go to Your Orders
                        </Link>
                    </div>
                    <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-800">Account Settings</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Update your account information and preferences.
                        </p>
                        <Link
                            to="/settings"
                            className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                        >
                            Manage Account
                        </Link>
                    </div>
                    <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-800">Security</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Change your password or enable two-factor authentication.
                        </p>
                        <Link
                            to="/security"
                            className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                        >
                            Update Security
                        </Link>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProfilePage() {
    return (
        <NavLayout>
            <Profile />
        </NavLayout>
    );
}
