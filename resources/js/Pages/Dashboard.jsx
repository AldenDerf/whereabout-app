import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import WhereaboutForm from '@/Components/Whereabouts/WhereaboutForm';
import BackButton from '@/Components/Whereabouts/BackButton';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div>
                <h2>Whereabout Tracker</h2>
                <WhereaboutForm />
                <BackButton />
            </div>
        </AuthenticatedLayout>
    );
}
