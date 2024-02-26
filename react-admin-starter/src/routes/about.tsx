export const Route = createFileRoute('/about')({
  component: function About() {
    return (
      <div className="p-2">
        Hello from About!
        Link to
        <Link to="/">Home</Link>
      </div>
    )
  },
})
