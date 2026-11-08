
function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

        <p>
          © {new Date().getFullYear()} Eddie Molina. All rights reserved.
        </p>

        <p>
          Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  )
}

export default Footer
