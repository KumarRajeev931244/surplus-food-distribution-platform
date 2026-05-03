
export default function Footer(){
    return(
  <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">NGO Food Bridge</h2>
        <p className="text-sm">
          Connecting surplus food donors with NGOs to reduce waste and serve communities.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Donate Food</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-3">Contact</h3>
        <p className="text-sm">Email: support@ngobridge.com</p>
        <p className="text-sm">Phone: +91 98765 43210</p>
      </div>
    </div>

    <div className="text-center text-xs mt-8 text-gray-500">
      © 2026 NGO Food Bridge. All rights reserved.
    </div>
  </footer>

    )
}