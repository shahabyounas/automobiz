
import Header from '@/components/Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <Header />
      {children}
    </div> 
  )
}
