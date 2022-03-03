import NextNprogress from 'nextjs-progressbar'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-ukraine-yellow)' />
      <main className='w-full text-ukraine-blue bg-cover'>
        {children}
      </main>
    </>
  )
}

export default Layout
