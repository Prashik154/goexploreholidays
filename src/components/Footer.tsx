export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
          <div className="space-y-2">
            <h4 className="font-semibold">Discover</h4>
            <a href="#" className="block">About</a>
            <a href="#" className="block">Packages</a>
          </div>
          {/* …other nav columns… */}
        </div>
        <p className="text-center mt-6 text-sm">&copy; 2025 Xplore Travel</p>
      </footer>
    )
  }