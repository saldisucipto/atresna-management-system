<script>
export default {
    name: "BaseLayout",
};
</script>

<template>
    <div>
        <Navbar>
            <slot name="header"></slot>
            <!-- Slot untuk judul atau aksi -->
        </Navbar>
        <main>
            <!-- This is Mian Layout  -->
            <router-view></router-view>
        </main>
    </div>
</template>
