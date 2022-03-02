import NextNprogress from 'nextjs-progressbar'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-ukraine-yellow)' />
      <main className='w-full text-white bg-ukraine-blue bg-cover pb-32'>
        {children}
      </main>
    </>
  )
}

export default Layout
