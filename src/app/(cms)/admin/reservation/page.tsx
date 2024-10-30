import { Metadata } from 'next';
import Table from '@/components/Table';
import { getReservations } from '@/services/reservationServices';

export const metadata: Metadata = {
    title: 'Reservation',
    description: 'Generated by create next app',
};

async function ReservationPage() {
    const res = await getReservations();

    return (
        <div>
            <div className="mt-8 pb-[20px]">
                {res.error ? (
                    <div>
                        <div className="mt-8">
                            <h1>Error From Fetching Data</h1>
                        </div>
                    </div>
                ) : (
                    <Table data={res} reservation></Table>
                )}
            </div>
        </div>
    );
}

export default ReservationPage;
