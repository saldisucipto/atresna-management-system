<script>
export default {};
</script>

<template>
    <base-layout>
        <div>
            <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
        </div>
        <nav>
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/settings">Go to Settings Pages</RouterLink>
        </nav>
        <main>
            <RouterView />
        </main>
    </base-layout>
</template>
