import React from 'react'

export const metadata = {
  title: 'About - ArkCool',
  description: 'Learn more about ArkCool and our mission',
}

export default function AboutPage() {
  return (
    <section style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 8 }}>About ArkCool</h1>
      <p style={{ color: '#444', maxWidth: 760 }}>
        ArkCool is a small team building thoughtful web experiences. We focus on
        clean interfaces, accessible components, and fast developer workflows.
      </p>

      <div style={{ marginTop: 28 }}>
        <h2>Our Mission</h2>
        <p style={{ color: '#444', maxWidth: 760 }}>
          We aim to create tools that help teams ship delightful products faster
          by combining sensible defaults with flexible building blocks.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h2>Team</h2>
        <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
          <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ fontWeight: 700 }}>Jane Doe</div>
            <div style={{ fontSize: 13, color: '#666' }}>Founder & Designer</div>
          </div>

          <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ fontWeight: 700 }}>John Smith</div>
            <div style={{ fontSize: 13, color: '#666' }}>Lead Engineer</div>
          </div>
        </div>
      </div>
    </section>
  )
}
