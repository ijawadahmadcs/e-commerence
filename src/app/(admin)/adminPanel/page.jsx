"use client";

import { useState } from "react";

export default function AdminPage() {
  const [orders] = useState(45);
  const [customers] = useState(30);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Overview Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Products</h2>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-2xl font-bold">{orders}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Customers</h2>
            <p className="text-2xl font-bold">{customers}</p>
          </div>
        </div>

        {/* Manage Sections */}
        <div className="grid grid-cols-3 gap-6">
          {/* Products */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Manage Products</h2>
            <p className="text-gray-600 mb-3"></p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Add
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>

          {/* Orders */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
            <p className="text-gray-600">View and update order status</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">
              View Orders
            </button>
          </div>

          {/* Customers */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Manage Customers</h2>
            <p className="text-gray-600">View customer list & profiles</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded mt-3">
              View Customers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
