<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <div icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
