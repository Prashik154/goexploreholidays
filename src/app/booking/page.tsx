import { BookingForm } from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Safari Adventure</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your spot for an unforgettable wildlife experience
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
}