import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { StyleProvider } from '@ant-design/cssinjs'

export const Route = createRootRoute({
  component: () => (
    <StyleProvider hashPriority="high">
      <ProgressBar />
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </StyleProvider>
  ),
  notFoundComponent: () => {
    return <p>Not Found (on root route)</p>
  },
})
