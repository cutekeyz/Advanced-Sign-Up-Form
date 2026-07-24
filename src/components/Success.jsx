import React from 'react';

function Success() {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-300 font-mono">
      <div className="bg-green-600 py-10 px-8 text-white rounded-2xl shadow-2xl text-center max-w-md">
        {/* Success Checkmark */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center text-3xl font-bold">
            ✓
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">You've successfully Signed Up</h1>
        <p className="text-amber-200 text-lg mb-6">A 6-digit confirmation code has been sent to your registered email. </p>

        <button
          className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-4 px-6 rounded-xl cursor-pointer transition"
        >
          Proceed to Verify Email 
        </button>

        <p className="text-black text-sm mt-4">If you don't see the email on you inbox, you can also check your spam folder. </p>
      </div>
    </div>
  )
};

export default Success;