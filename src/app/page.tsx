"use client";

import ThreeDModel from "@/components/ThreeDModel";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-4xl font-bold mb-4">Hero Section with 3D Model</h1>
        <p className="mb-8">Vignam Text to Simulations</p>
        <ThreeDModel />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Features Section</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">Feature 1</h3>
              <p className="text-gray-300">Feature description goes here.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Feature 2</h3>
              <p className="text-gray-300">Another feature description here.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Feature 3</h3>
              <p className="text-gray-300">Yet another feature explanation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="video" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Demo Video</h2>
          <div className="aspect-video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/E1czmX6bjFA?start=10"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </section>
    </main>
  );
}
