<template>
  <div>
    <h1>🏠 Bienvenido a Nuxt con SSG y CSR</h1>
    <p>Esta página está pre-renderizada (SSG) para SEO.</p>

    <nav>
      <ul>
        <li><NuxtLink to="/ssg">🔗 Página SSG</NuxtLink></li>
        <li><NuxtLink to="/mixed">🔗 Página Mixta (SSG + CSR)</NuxtLink></li>
        <li><NuxtLink to="/csr">🔗 Página CSR (Solo Cliente)</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
