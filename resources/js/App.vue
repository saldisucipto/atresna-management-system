<script>
export default {
    data() {
        return {
            nama: "Saldi Sucipto",
            class: " bg-slate-700 text-xl ",
            count: 0,
        };
    },
    methods: {
        // ini digunakan untuk membuat method
        // fungsi untuk menambah data mount
        tambah_data() {
            this.count++;
            console.info("Method di eksekusi");
        },
        reset_value() {
            console.info("Method di eksekusi");
            this.count = 0;
        },
    },
    mounted() {
        // fungsi ini akan diekseuki ketika Components di mount
        // merubah count ketika component di mounted
        this.count = 10;
        console.info("Components di mount");
    },
};
</script>

<template>
    <div>
        <h1>Hallo World</h1>
        <h2>Namaku {{ nama }}</h2>
        <div :class>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            iusto?
        </div>
        <div>{{ count }}</div>
        <button class="bg-blue-600 text-white" @click="tambah_data">
            Tambah Data
        </button>
        <button class="bg-red-600 text-white" @click="reset_value">
            Reset Value
        </button>
    </div>
</template>
