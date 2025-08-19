"use client";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-pink-500 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-pink-400">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-3">
          <Link href="/admin" className="block hover:bg-pink-600 p-2 rounded">
            Dashboard
          </Link>
          <a href="#add-product" className="block hover:bg-pink-600 p-2 rounded">
            Add Product
          </a>
          <a
            href="#product-list"
            className="block hover:bg-pink-600 p-2 rounded"
          >
            Products List
          </a>
          <a href="#orders" className="block hover:bg-pink-600 p-2 rounded">
            Orders
          </a>
          <a href="#users" className="block hover:bg-pink-600 p-2 rounded">
            Users
          </a>
        </nav>

        <button className="m-4 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Add Product Form */}
        <section id="add-product" className="bg-white shadow-md p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Product Title"
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Description"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Add Product
            </button>
          </form>
        </section>

        {/* Products List */}
        <section id="product-list" className="bg-white shadow-md p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Products List</h2>
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">iPhone 15</td>
                <td className="p-2 border">$999</td>
                <td className="p-2 border">Mobiles</td>
              </tr>
              <tr>
                <td className="p-2 border">Nike Shoes</td>
                <td className="p-2 border">$120</td>
                <td className="p-2 border">Footwear</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Orders */}
        <section id="orders" className="bg-white shadow-md p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">#1001</td>
                <td className="p-2 border">Ali</td>
                <td className="p-2 border">$250</td>
              </tr>
              <tr>
                <td className="p-2 border">#1002</td>
                <td className="p-2 border">Sara</td>
                <td className="p-2 border">$120</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Users */}
        <section id="users" className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Ali</td>
                <td className="p-2 border">ali@example.com</td>
              </tr>
              <tr>
                <td className="p-2 border">Sara</td>
                <td className="p-2 border">sara@example.com</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
