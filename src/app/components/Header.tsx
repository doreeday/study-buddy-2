import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--dark-accent)] shadow-sm sticky top-0 z-10"> 
      <div className="container flex items-center justify-between mx-auto p-5 text-[var(--background)]">
        
        {/* Logo image from public folder */}
        <Link href="/" className="flex items-center">
          <Image
            src="/StudyTayoLogo.png"  
            alt="StudyTayo Logo"
            width={180}               
            height={70}
            priority                   
          />
        </Link>

        <div className="flex gap-3">
          <Link 
            href="/login" 
            className="px-4 py-2 rounded bg-[var(--button-background)] text-[var(--foreground)] hover:bg-[var(--button-hover)] transition"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-4 py-2 rounded bg-[var(--button-background)] text-[var(--foreground)] hover:bg-[var(--button-hover)] transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  )
}
