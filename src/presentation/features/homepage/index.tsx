import Link from 'next/link'
import React from 'react'

export default function HomePageIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Clean Architecture Template
          </h1>
          <p className="text-xl text-gray-600">
            A Next.js template following Domain-Driven Design and Clean Architecture principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Architecture Layers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-3">Domain:</span>
                <span>Business entities and rules</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-3">Application:</span>
                <span>Use cases and business logic coordination</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-3">Infrastructure:</span>
                <span>External services and data access</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-3">Presentation:</span>
                <span>UI components and user interactions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Features Included</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Layered architecture structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Domain entities and interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Use case implementations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Example forms and components</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Directory Structure</h2>
          <pre className="bg-white p-4 rounded text-sm overflow-x-auto text-gray-700">
{`src/
├── application/      # Use cases and orchestration
│   ├── auth/
│   ├── inventory/
│   ├── marketplace/
│   ├── payment/
│   └── customer/
├── domain/           # Business entities and interfaces
│   ├── auth/
│   ├── inventory/
│   ├── marketplace/
│   ├── payment/
│   └── customer/
├── infrastructure/   # External services and persistence
│   ├── auth/
│   ├── inventory/
│   ├── marketplace/
│   ├── payment/
│   └── customer/
└── presentation/     # UI components and pages
    ├── features/
    ├── shared/
    ├── components/
    └── providers/`}
          </pre>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/login"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            View Login Example
          </Link>
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
          >
            View Register Example
          </Link>
        </div>

        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
          <p className="text-gray-700 mb-2">
            This template is structured to scale. Each layer has specific responsibilities:
          </p>
          <ul className="text-gray-700 space-y-1 ml-4">
            <li>• Add your API integrations in <code className="bg-gray-100 px-1">infrastructure/</code></li>
            <li>• Define business logic in <code className="bg-gray-100 px-1">application/</code></li>
            <li>• Build UI components in <code className="bg-gray-100 px-1">presentation/</code></li>
            <li>• Keep domain models pure and framework-agnostic</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
