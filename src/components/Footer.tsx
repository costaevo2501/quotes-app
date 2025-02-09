export default function Footer() {
    return (
      <footer className="footer mt-auto py-3 bg-dark text-white fixed-bottom">
        <div className="container text-center">
          <span>&copy; {new Date().getFullYear()} Quotes App. All rights reserved.</span>
        </div>
      </footer>
    );
  }