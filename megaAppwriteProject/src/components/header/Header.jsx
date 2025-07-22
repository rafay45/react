import { Logo, Container, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
  const authState = useSelector(state => state.authentication.status)
  const navigate = useNavigate()

  const items = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'LogIn',
      slug: '/login',
      active: !authState
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authState
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authState
    },
    {
      name: 'All Post',
      slug: '/all-post',
      active: authState
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />

            </Link>
          </div>
          <ul className='flex ml-auto'>
            {items.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authState && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>

  )
}

export default Header;