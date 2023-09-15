import Link from 'next/link';
import Container from './ui/container'
import './header.css'


function Header(){
    return (<header className="sm:flex sm:justify-between py-3 px-4 border-b header-bg shadow">
        <Container>
            <div className="relative flex items-center h-16 justify-between">
                <div>
                    <Link href="/">
                        <h1 className="text-xl font-bold title"> Global Employers </h1>
                    </Link>
                </div>
            </div>
        </Container>
    </header>)
}

export default Header;